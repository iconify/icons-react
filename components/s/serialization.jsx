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
		"content": `<style>.gio5c8j3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 3.5h2.25A2.625 2.625 0 0 1 10 6.125v2.75A2.625 2.625 0 0 1 7.375 11.5h-2.25A2.625 2.625 0 0 1 2.5 8.875v-2.75A2.625 2.625 0 0 1 5.125 3.5m11.5 0h2.25A2.625 2.625 0 0 1 21.5 6.125v2.75a2.625 2.625 0 0 1-2.625 2.625h-2.25A2.625 2.625 0 0 1 14 8.875v-2.75A2.625 2.625 0 0 1 16.625 3.5M6.25 14.5v3a2.5 2.5 0 0 0 2.5 2.5h6.5a2.5 2.5 0 0 0 2.5-2.5v-3M4 16.75l2.25-2.25l2.25 2.25m7 0l2.25-2.25L20 16.75");
}
</style><path class="gio5c8j3w"/>`,
		"fallback": "uix:serialization",
	});
}

export default Component;
