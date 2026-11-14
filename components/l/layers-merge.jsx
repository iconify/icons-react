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
		"content": `<style>.m65chdjxx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.817 10.931l5.251 2.771a1.75 1.75 0 0 1 0 3.096l-5.251 2.771a1.75 1.75 0 0 1-1.634 0l-5.251-2.771a1.75 1.75 0 0 1 0-3.096l5.251-2.771a1.75 1.75 0 0 1 1.634 0M4.5 2.5L12 7m7.5-4.5L12 7");
}
</style><path class="m65chdjxx"/>`,
		"fallback": "uix:layers-merge",
	});
}

export default Component;
