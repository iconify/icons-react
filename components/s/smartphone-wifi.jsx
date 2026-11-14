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
		"content": `<style>.goes4mb5x {
  d: path("M10.055 12.055a2.75 2.75 0 0 1 3.89 0m-5.657-1.767a5.25 5.25 0 0 1 7.424 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pa0q32b4s {
  d: path("M10.375 2.5h3.25A4.375 4.375 0 0 1 18 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 6 17.125V6.875A4.375 4.375 0 0 1 10.375 2.5M10.5 18h3M12 14h.01");
}
</style><g class="hntgybcog"><path class="pa0q32b4s"/><path class="goes4mb5x"/></g>`,
		"fallback": "uix:smartphone-wifi",
	});
}

export default Component;
