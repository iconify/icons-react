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
		"content": `<style>.fno_lmtpi {
  width: 9px;
  height: 9.5px;
  x: 2.75px;
  y: 10.25px;
  rx: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ncc0mz7bg {
  d: path("M4.75 10.25V7.5a2.5 2.5 0 0 1 5 0v2.75");
}

.x0pdqfwra {
  d: path("M17.75 14.5V16l1 1");
}

.z2tlmlb4i {
  cx: 17.75px;
  cy: 16px;
  r: 3.5px;
}
</style><g class="hntgybcog"><rect class="fno_lmtpi"/><path class="ncc0mz7bg"/><circle class="z2tlmlb4i"/><path class="x0pdqfwra"/></g>`,
		"fallback": "iconoven:lock-timer",
	});
}

export default Component;
