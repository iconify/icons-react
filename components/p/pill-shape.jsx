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
		"content": `<style>.cwud_kb9w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 7h9a5 5 0 0 1 5 5a5 5 0 0 1-5 5h-9a5 5 0 0 1-5-5a5 5 0 0 1 5-5");
}
</style><path class="cwud_kb9w"/>`,
		"fallback": "uix:pill-shape",
	});
}

export default Component;
