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
		"content": `<style>.d6up6kqnb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.375 4h9.25A4.375 4.375 0 0 1 21 8.375v7.25A4.375 4.375 0 0 1 16.625 20h-9.25A4.375 4.375 0 0 1 3 15.625v-7.25A4.375 4.375 0 0 1 7.375 4M3 9h18M3 14.5h18M10 4v16");
}
</style><path class="d6up6kqnb"/>`,
		"fallback": "uix:risk-actuarial-table",
	});
}

export default Component;
