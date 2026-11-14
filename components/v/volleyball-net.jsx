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
		"content": `<style>.vtu3-bbun {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6h16a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 20 16H4a1.5 1.5 0 0 1-1.5-1.5v-7A1.5 1.5 0 0 1 4 6m-1.5 5h19M7 6v10m5-10v10m5-10v10M3 16v5.5M21 16v5.5");
}
</style><path class="vtu3-bbun"/>`,
		"fallback": "uix:volleyball-net",
	});
}

export default Component;
