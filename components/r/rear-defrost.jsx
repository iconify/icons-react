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

.ms0j1kbzx {
  d: path("M7.375 3.5h9.25A4.375 4.375 0 0 1 21 7.875v2.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 10.125v-2.25A4.375 4.375 0 0 1 7.375 3.5");
}

.syuw_3pbr {
  d: path("M8 8c-1 1.5 1 3 0 4.5s1 3 0 4.5s1 3 0 4m4-13c-1 1.5 1 3 0 4.5s1 3 0 4.5s1 3 0 4m4-13c-1 1.5 1 3 0 4.5s1 3 0 4.5s1 3 0 4");
}
</style><g class="hntgybcog"><path class="ms0j1kbzx"/><path class="syuw_3pbr"/></g>`,
		"fallback": "uix:rear-defrost",
	});
}

export default Component;
