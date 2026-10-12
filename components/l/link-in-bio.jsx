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
		"content": `<style>.hhov-gbog {
  cx: 12px;
  cy: 7px;
  r: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jc-2thb8k {
  width: 13.5px;
  height: 18.5px;
  x: 5.25px;
  y: 2.75px;
  rx: 3px;
}

.l_nq5mbit {
  width: 6.5px;
  height: 2px;
  x: 8.75px;
  y: 11px;
  rx: 1px;
}

.qminvoapa {
  width: 6.5px;
  height: 2px;
  x: 8.75px;
  y: 15.5px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="jc-2thb8k"/><circle class="hhov-gbog"/><rect class="l_nq5mbit"/><rect class="qminvoapa"/></g>`,
		"fallback": "iconoven:link-in-bio",
	});
}

export default Component;
