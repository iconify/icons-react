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
		"content": `<style>.ecbzzxbbf {
  fill: currentColor;
  d: path("M16 16h2a1.5 1.5 0 0 1 1.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-1.5A1.5 1.5 0 0 1 16 16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sxvzxibbq {
  d: path("M4.5 20.5V10a7.5 7.5 0 0 1 15 0v10.5h-5V10a2.5 2.5 0 0 0-5 0v10.5Zm0-4.5h5");
}
</style><g class="hntgybcog"><path class="sxvzxibbq"/><path class="ecbzzxbbf"/></g>`,
		"fallback": "uix:magnetic-poles",
	});
}

export default Component;
