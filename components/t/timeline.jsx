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
		"content": `<style>.dcgw77bis {
  cx: 12px;
  cy: 12px;
  r: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ib4ba0c-n {
  width: 6.5px;
  height: 4.5px;
  x: 3.25px;
  y: 3px;
  rx: 1.25px;
}

.iexzgsb6g {
  d: path("M2.75 12H5m3 0h2.5m3 0H16m3 0h2.25");
}

.k78ywd-qs {
  cx: 6.5px;
  cy: 12px;
  r: 1.5px;
}

.o4um-zpiw {
  cx: 17.5px;
  cy: 12px;
  r: 1.5px;
}

.oyb6s-ewj {
  width: 6.5px;
  height: 4.5px;
  x: 8.75px;
  y: 16.5px;
  rx: 1.25px;
}

.y_lresn1h {
  width: 6.5px;
  height: 4.5px;
  x: 14.25px;
  y: 3px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><path class="iexzgsb6g"/><circle class="k78ywd-qs"/><circle class="dcgw77bis"/><circle class="o4um-zpiw"/><rect class="ib4ba0c-n"/><rect class="oyb6s-ewj"/><rect class="y_lresn1h"/></g>`,
		"fallback": "iconoven:timeline",
	});
}

export default Component;
