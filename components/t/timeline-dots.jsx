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
		"content": `<style>.cq42ivb0d {
  cx: 6px;
  cy: 18.5px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mm8bfyb-p {
  d: path("M6 7.25v3m0 3.5v3M10.5 5.5h9.75m-9.75 13H19M10.5 12h7");
}

.qcx76zaxv {
  cx: 6px;
  cy: 12px;
  r: 1.75px;
}

.t09ysxkfx {
  cx: 6px;
  cy: 5.5px;
  r: 1.75px;
}
</style><g class="hntgybcog"><circle class="t09ysxkfx"/><circle class="qcx76zaxv"/><circle class="cq42ivb0d"/><path class="mm8bfyb-p"/></g>`,
		"fallback": "iconoven:timeline-dots",
	});
}

export default Component;
