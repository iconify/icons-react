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

.rpot37r8w {
  d: path("M7.435 8h9.13a1.75 1.75 0 0 1 1.716 1.407l1.8 9a1.75 1.75 0 0 1-1.716 2.093H5.635a1.75 1.75 0 0 1-1.716-2.093l1.8-9A1.75 1.75 0 0 1 7.435 8");
}

.zorunob7v {
  d: path("M9.5 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="rpot37r8w"/><path class="zorunob7v"/></g>`,
		"fallback": "uix:kilogram",
	});
}

export default Component;
