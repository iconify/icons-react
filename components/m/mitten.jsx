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

.iru6_3bfk {
  d: path("M5.5 15.25v-7a4.75 4.75 0 0 1 9.5 0V10l1.6-1.6a1.6 1.6 0 0 1 2.3 2.25l-3.9 4v.6Z");
}

.xo5zpi-ey {
  width: 11px;
  height: 6px;
  x: 4.75px;
  y: 15.25px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><path class="iru6_3bfk"/><rect class="xo5zpi-ey"/></g>`,
		"fallback": "iconoven:mitten",
	});
}

export default Component;
