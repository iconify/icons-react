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

.ioyz_ybsf {
  fill: currentColor;
  d: path("M11 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 3.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 3.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}

.z9n069o0b {
  d: path("M11.5 2h1A3.5 3.5 0 0 1 16 5.5v6a3.5 3.5 0 0 1-3.5 3.5h-1A3.5 3.5 0 0 1 8 11.5v-6A3.5 3.5 0 0 1 11.5 2m.5 13v3m0 0l-5 3.5m5-3.5l5 3.5");
}
</style><g class="hntgybcog"><path class="z9n069o0b"/><path class="ioyz_ybsf"/></g>`,
		"fallback": "uix:temporary-traffic-light",
	});
}

export default Component;
