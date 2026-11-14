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
		"content": `<style>.kbvh77egz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 9.5V4A1.5 1.5 0 0 1 8 2.5h8A1.5 1.5 0 0 1 17.5 4v5.5M6 11.5h12a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16v-1A3.5 3.5 0 0 1 6 11.5m0 10h12m-8.25-19v7m7.75 6h.01");
}
</style><path class="kbvh77egz"/>`,
		"fallback": "uix:statement-passbook-print",
	});
}

export default Component;
