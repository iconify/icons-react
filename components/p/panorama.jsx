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
		"content": `<style>.gydtbsbqv {
  d: path("M2.5 6c6 2 13 2 19 0v12c-6-2-13-2-19 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zwy5eobsu {
  d: path("m7 14.5l3-3l2.5 2.5l2.5-2.5l2.5 2.5");
}
</style><g class="hntgybcog"><path class="gydtbsbqv"/><path class="zwy5eobsu"/></g>`,
		"fallback": "uix:panorama",
	});
}

export default Component;
