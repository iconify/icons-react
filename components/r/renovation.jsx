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
		"content": `<style>.bgv6tbcmm {
  d: path("M17 6.75v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j757nou5k {
  width: 10px;
  height: 4px;
  x: 11.25px;
  y: 2.75px;
  rx: 1.5px;
}

.ogs0flb9y {
  width: 2.5px;
  height: 6.5px;
  x: 15.75px;
  y: 9.75px;
  rx: 1px;
}

.ryvifbbnq {
  d: path("M2.75 20.25V13.2q0-1 .78-1.62l3.69-2.96Q8 8 8.78 8.62l3.69 2.96q.78.62.78 1.62v7.05q0 1-1 1h-8.5q-1 0-1-1");
}
</style><g class="hntgybcog"><path class="ryvifbbnq"/><rect class="j757nou5k"/><path class="bgv6tbcmm"/><rect class="ogs0flb9y"/></g>`,
		"fallback": "iconoven:renovation",
	});
}

export default Component;
