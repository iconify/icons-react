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
		"content": `<style>.g32fhtb-b {
  d: path("M2.75 12.75a7 7 0 0 1 14 0");
}

.kcqpalbpb {
  d: path("m11.16 11.34l1.95-1.95m6.14 4.11v3.75");
}

.mvq-5215u {
  cx: 9.75px;
  cy: 12.75px;
  r: 2px;
}

.wbgsvczqr {
  cx: 19.25px;
  cy: 19.25px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="g32fhtb-b"/><circle class="mvq-5215u"/><path class="kcqpalbpb"/><circle class="wbgsvczqr"/></g>`,
		"fallback": "iconoven:temp-gauge-car-sharp",
	});
}

export default Component;
