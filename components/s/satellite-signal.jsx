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
		"content": `<style>.e7f51zb3k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 8.75a9 9 0 0 0 11.5 11.5ZM9.5 14.5l3.75-3.75m0-4a4 4 0 0 1 4 4m-4-7.5a7.5 7.5 0 0 1 7.5 7.5");
}
</style><path class="e7f51zb3k"/>`,
		"fallback": "uix:satellite-signal",
	});
}

export default Component;
