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
		"content": `<style>.sawehy3bu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 2.5h15.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 19.75 7H4.25A1.75 1.75 0 0 1 2.5 5.25v-1A1.75 1.75 0 0 1 4.25 2.5M8.125 7h7.75A2.625 2.625 0 0 1 18.5 9.625v7.25a2.625 2.625 0 0 1-2.625 2.625h-7.75A2.625 2.625 0 0 1 5.5 16.875v-7.25A2.625 2.625 0 0 1 8.125 7M9.5 16.5l5-6.5m-4.75.5h.01m4.49 5.5h.01");
}
</style><path class="sawehy3bu"/>`,
		"fallback": "uix:shelf-label-red",
	});
}

export default Component;
