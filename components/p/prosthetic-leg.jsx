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
		"content": `<style>.hi2bozw5h {
  fill: currentColor;
  d: path("M6.375 19.75h4.75a.875.875 0 0 1 .875.875a.875.875 0 0 1-.875.875h-4.75a.875.875 0 0 1-.875-.875a.875.875 0 0 1 .875-.875");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ppm9jta7x {
  d: path("M7 2.5L8 10h6l1-7.5M11 10c0 3 3.5 4.5 4.5 7.5c.75 2.5-1 4-3.5 4H6M7.5 5.75h7");
}
</style><g class="hntgybcog"><path class="ppm9jta7x"/><path class="hi2bozw5h"/></g>`,
		"fallback": "uix:prosthetic-leg",
	});
}

export default Component;
