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
		"content": `<style>.w4pfy-bre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 9a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M4 20l5.75-5.75M4.5 15.5l3-3m1 7l3-3");
}
</style><path class="w4pfy-bre"/>`,
		"fallback": "uix:particle",
	});
}

export default Component;
