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

.sywkcncgs {
  d: path("M8.25 13.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}

.zxwv6oemr {
  d: path("M2.5 9a2 2 0 0 1 2-2h3l2-3h5l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="zxwv6oemr"/><path class="sywkcncgs"/></g>`,
		"fallback": "uix:map-photo",
	});
}

export default Component;
