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

.qtl0xvb8o {
  d: path("M7.5 18H16.5");
}

.w4y0zdb1t {
  d: path("M7.5 10H16.5");
}

.y8rchkbuh {
  d: path("M5 6H19");
}

.zvlywgbxr {
  d: path("M5 14H19");
}
</style><g class="hntgybcog"><path class="y8rchkbuh"/><path class="w4y0zdb1t"/><path class="zvlywgbxr"/><path class="qtl0xvb8o"/></g>`,
		"fallback": "solar:text-align-center-linear",
	});
}

export default Component;
