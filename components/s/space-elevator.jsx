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
		"content": `<style>.e6_z-_t-t {
  d: path("M12 5.25v5m0 3v5.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o_a7uohsk {
  width: 3px;
  height: 3px;
  x: 10.5px;
  y: 10.25px;
  rx: 0.75px;
}

.p32cdrbxf {
  d: path("M3.5 21.25a8.5 2.75 0 0 1 17 0Z");
}

.t8-l2ubqr {
  width: 5px;
  height: 2.5px;
  x: 9.5px;
  y: 2.75px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="p32cdrbxf"/><rect class="t8-l2ubqr"/><path class="e6_z-_t-t"/><rect class="o_a7uohsk"/></g>`,
		"fallback": "iconoven:space-elevator",
	});
}

export default Component;
