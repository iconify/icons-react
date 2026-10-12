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
		"content": `<style>.h21f8u-uj {
  d: path("M10.25 6.25v2m3.5-2v2m-1.75 2v.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qvosu0b2k {
  width: 14px;
  height: 18.5px;
  x: 5px;
  y: 2.75px;
  rx: 2.5px;
}

.rgf17t9zn {
  d: path("M10.5 15.75h3");
}

.t-_7d33ft {
  width: 8px;
  height: 5.5px;
  x: 8px;
  y: 13px;
  rx: 2.25px;
}
</style><g class="hntgybcog"><rect class="qvosu0b2k"/><path class="h21f8u-uj"/><rect class="t-_7d33ft"/><path class="rgf17t9zn"/></g>`,
		"fallback": "iconoven:outlet-cover",
	});
}

export default Component;
