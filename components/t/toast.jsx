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
		"content": `<style>.b1giyo3pl {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pnny9bcms {
  d: path("M7.875 12.25h8.25a2.625 2.625 0 0 1 2.625 2.625v1.25a2.625 2.625 0 0 1-2.625 2.625h-8.25a2.625 2.625 0 0 1-2.625-2.625v-1.25a2.625 2.625 0 0 1 2.625-2.625M8 15.5h.01m2.99 0h5");
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="pnny9bcms"/></g>`,
		"fallback": "uix:toast",
	});
}

export default Component;
