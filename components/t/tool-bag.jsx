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
		"content": `<style>.n_sibcnqa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10h17v9a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2ZM8 10V7a4 4 0 0 1 8 0v3M3.5 14.5h17");
}
</style><path class="n_sibcnqa"/>`,
		"fallback": "uix:tool-bag",
	});
}

export default Component;
