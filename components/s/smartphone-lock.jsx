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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n-2uxvvgk {
  d: path("M10.375 2.5h3.25A4.375 4.375 0 0 1 18 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 6 17.125V6.875A4.375 4.375 0 0 1 10.375 2.5M10.5 18h3");
}

.qn1qcy50x {
  d: path("M11.25 10h1.5a1.75 1.75 0 0 1 1.75 1.75V12a1.75 1.75 0 0 1-1.75 1.75h-1.5A1.75 1.75 0 0 1 9.5 12v-.25A1.75 1.75 0 0 1 11.25 10m-.75 0V9a1.5 1.5 0 0 1 3 0v1");
}
</style><g class="hntgybcog"><path class="n-2uxvvgk"/><path class="qn1qcy50x"/></g>`,
		"fallback": "uix:smartphone-lock",
	});
}

export default Component;
