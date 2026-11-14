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

.msl4_xbyq {
  d: path("M14.114 11.27a2.25 2.25 0 0 1-4.228 0");
}

.s-eyoiteb {
  d: path("M10.375 2.5h3.25A4.375 4.375 0 0 1 18 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 6 17.125V6.875A4.375 4.375 0 0 1 10.375 2.5M10.5 18h3m-2.75-9.25h.01m2.49 0h.01");
}
</style><g class="hntgybcog"><path class="s-eyoiteb"/><path class="msl4_xbyq"/></g>`,
		"fallback": "uix:smartphone-face-unlock",
	});
}

export default Component;
