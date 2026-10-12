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
		"content": `<style>.ahgaes8px {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 10.25h18.5v9H2.75zm0 3.25h18.5");
}

.gnq4yvbnv {
  cx: 7.5px;
  cy: 5.75px;
  r: 2px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.gy76-xb2k {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 16.5h.01m3.99.25h.01m3.99-.5h.01");
}

.qkd3rlb4c {
  cx: 12.75px;
  cy: 4.5px;
  r: 1.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="gnq4yvbnv"/><circle class="qkd3rlb4c"/><path class="ahgaes8px"/><path class="gy76-xb2k"/></g>`,
		"fallback": "iconoven:sponge-sharp",
	});
}

export default Component;
