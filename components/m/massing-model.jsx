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
		"content": `<style>.igubvwbhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 7h4A1.5 1.5 0 0 1 11 8.5V19a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 4 19V8.5A1.5 1.5 0 0 1 5.5 7M4 7l3-3h7l-3 3m1.5 6h4a1.5 1.5 0 0 1 1.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 11 19v-4.5a1.5 1.5 0 0 1 1.5-1.5M11 13l3-3h7l-3 3m3-3v7.5l-3 3M14 4v6");
}
</style><path class="igubvwbhh"/>`,
		"fallback": "uix:massing-model",
	});
}

export default Component;
