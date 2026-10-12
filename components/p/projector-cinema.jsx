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

.qe3spob8a {
  cx: 6.25px;
  cy: 6.25px;
  r: 3px;
}

.tscvjzbcc {
  d: path("m17.45 12.98l3.1-1.21q.7-.27.7.48v6.5q0 .75-.7.48l-3.1-1.21q-.7-.27-.7-1.02v-3q0-.75.7-1.02");
}

.wgz-vcn9s {
  width: 14px;
  height: 7.75px;
  x: 2.75px;
  y: 12px;
  rx: 2px;
}

.xascr4b4t {
  cx: 14px;
  cy: 7px;
  r: 2.25px;
}
</style><g class="hntgybcog"><circle class="qe3spob8a"/><circle class="xascr4b4t"/><rect class="wgz-vcn9s"/><path class="tscvjzbcc"/></g>`,
		"fallback": "iconoven:projector-cinema",
	});
}

export default Component;
