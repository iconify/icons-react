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
		"content": `<style>.qftqilx1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4h1.5A1.5 1.5 0 0 1 8 5.5V19a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V5.5A1.5 1.5 0 0 1 5 4m4.5 2.5H11A1.5 1.5 0 0 1 12.5 8v11a1.5 1.5 0 0 1-1.5 1.5H9.5A1.5 1.5 0 0 1 8 19V8a1.5 1.5 0 0 1 1.5-1.5m4.453-.495l1.467-.312a1.5 1.5 0 0 1 1.779 1.155l2.391 11.249a1.5 1.5 0 0 1-1.156 1.779l-1.467.312a1.5 1.5 0 0 1-1.779-1.155L12.797 7.784a1.5 1.5 0 0 1 1.156-1.779M3.5 8H8m0 2.5h4.5");
}
</style><path class="qftqilx1y"/>`,
		"fallback": "uix:pin-library",
	});
}

export default Component;
