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
		"content": `<style>.inhuwtbgf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m9 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-4.5 13a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-7-6.5q4.75-2.5 9.5 0t9.5 0");
}
</style><path class="inhuwtbgf"/>`,
		"fallback": "uix:pollen-grains",
	});
}

export default Component;
