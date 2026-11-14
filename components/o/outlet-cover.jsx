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

.k0s9bkb-l {
  d: path("M11.125 12.5h1.75a2.625 2.625 0 0 1 2.625 2.625v.75a2.625 2.625 0 0 1-2.625 2.625h-1.75A2.625 2.625 0 0 1 8.5 15.875v-.75a2.625 2.625 0 0 1 2.625-2.625");
}

.x-_qco-tk {
  d: path("M9.875 2.5h4.25A4.375 4.375 0 0 1 18.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-4.25A4.375 4.375 0 0 1 5.5 17.125V6.875A4.375 4.375 0 0 1 9.875 2.5M10.5 6v3m3-3v3");
}
</style><g class="hntgybcog"><path class="x-_qco-tk"/><path class="k0s9bkb-l"/></g>`,
		"fallback": "uix:outlet-cover",
	});
}

export default Component;
