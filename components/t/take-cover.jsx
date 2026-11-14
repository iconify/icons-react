import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mdh5blb3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7L5 4h14l2.5 3ZM5 7v14M19 7v14M6.75 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0m.75 8c.5-2.25 2.5-3.5 5-3.5s4 1.5 4 3.5");
}
</style><path class="mdh5blb3w"/>`,
		"fallback": "uix:take-cover",
	});
}

export default Component;
