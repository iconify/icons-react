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
		"content": `<style>.d2_laibuf {
  d: path("M17 12.411V9.5l2 1l2-4L16 3q-4 3.5-8 0L3 6.5l2 4l2-1v11h7.189");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m5hes0bss {
  d: path("m19 22l-2.25-2.75a2.75 2.75 0 1 1 4.5 0Z");
}
</style><g class="hntgybcog"><path class="d2_laibuf"/><path class="m5hes0bss"/></g>`,
		"fallback": "uix:pin-clothing",
	});
}

export default Component;
