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
		"content": `<style>.criasx_dr {
  cx: 16.25px;
  cy: 11.5px;
  r: 1.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hc_ppzb1h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.75h13v4.5h-13zm6.5 0v4.5m-9.25 8.5h18.5M12 7.25v8.5");
}

.n-7ry0b5i {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 18.5h.01m1.99 0h.01M3.25 21h.01m3.49 0h.01M11 18.5h.01m1.99 0h.01M10.25 21h.01m3.49 0h.01M18 18.5h.01m1.99 0h.01M17.25 21h.01m3.49 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.w795bb6zm {
  cx: 7.75px;
  cy: 11.5px;
  r: 1.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ux2u0rbkq"><path class="hc_ppzb1h"/><circle class="w795bb6zm"/><circle class="criasx_dr"/><path class="n-7ry0b5i"/></g>`,
		"fallback": "iconoven:sprayer-tractor-sharp",
	});
}

export default Component;
