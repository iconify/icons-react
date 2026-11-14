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

.lw-rw1b-i {
  d: path("M6.875 3h8.25A4.375 4.375 0 0 1 19.5 7.375v1a4.375 4.375 0 0 1-4.375 4.375h-8.25A4.375 4.375 0 0 1 2.5 8.375v-1A4.375 4.375 0 0 1 6.875 3");
}

.z7ilmobaz {
  d: path("M2.5 9H12a3.5 3.5 0 0 0 3.5-3.5V3m.5 17a2.5 1.75 0 1 0 5 0a2.5 1.75 0 1 0-5 0m-.75-3.5h.01m3.24-1h.01m3.24 1h.01");
}
</style><g class="hntgybcog"><path class="lw-rw1b-i"/><path class="z7ilmobaz"/></g>`,
		"fallback": "uix:pet-blanket",
	});
}

export default Component;
