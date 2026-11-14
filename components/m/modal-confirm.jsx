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
		"content": `<style>.ga-i7-3tq {
  d: path("m9 10l2 2l4-4m-8.5 8.5h3.75m3.5 0h3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z0wll3bik {
  d: path("M7.375 3.5h9.25A4.375 4.375 0 0 1 21 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 16.125v-8.25A4.375 4.375 0 0 1 7.375 3.5");
}
</style><g class="hntgybcog"><path class="z0wll3bik"/><path class="ga-i7-3tq"/></g>`,
		"fallback": "uix:modal-confirm",
	});
}

export default Component;
