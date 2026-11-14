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
		"content": `<style>.qnmpz3-vw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h6A2.5 2.5 0 0 1 13.5 5v3.25l2.75 2.5H5a2.5 2.5 0 0 1-2.5-2.5V5A2.5 2.5 0 0 1 5 2.5M14.5 15H19a2.5 2.5 0 0 1 2.5 2.5V19a2.5 2.5 0 0 1-2.5 2.5h-4.5A2.5 2.5 0 0 1 12 19v-1.5L9.25 15Z");
}
</style><path class="qnmpz3-vw"/>`,
		"fallback": "uix:legal-dispute",
	});
}

export default Component;
