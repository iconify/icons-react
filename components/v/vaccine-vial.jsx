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
		"content": `<style>.al4fges7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.875 9.5h2.25a4.375 4.375 0 0 1 4.375 4.375v3.25a4.375 4.375 0 0 1-4.375 4.375h-2.25A4.375 4.375 0 0 1 6.5 17.125v-3.25A4.375 4.375 0 0 1 10.875 9.5M9.25 6h5.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75h-5.5A1.75 1.75 0 0 1 7.5 7.75A1.75 1.75 0 0 1 9.25 6m1.5-3.5h2.5A1.75 1.75 0 0 1 15 4.25A1.75 1.75 0 0 1 13.25 6h-2.5A1.75 1.75 0 0 1 9 4.25a1.75 1.75 0 0 1 1.75-1.75m-1.5 12h5.5");
}
</style><path class="al4fges7k"/>`,
		"fallback": "uix:vaccine-vial",
	});
}

export default Component;
