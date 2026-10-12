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
		"content": `<style>.hmegxfbso {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.75h13.5v10.5H2.75z");
}

.iopr4tvqy {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 12.25h.01m3.49 0h.01m3.49 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.w8nt-wy2u {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 16h7");
}

.xn3dtybmu {
  cx: 18.75px;
  cy: 5.25px;
  r: 2.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ux2u0rbkq"><path class="hmegxfbso"/><path class="iopr4tvqy"/><path class="w8nt-wy2u"/><circle class="xn3dtybmu"/></g>`,
		"fallback": "iconoven:keylogger-sharp",
	});
}

export default Component;
