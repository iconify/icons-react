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
		"content": `<style>.ji2xoxycc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.18 12.06a4.75 4.75 0 1 0 2.76 2.76a2 2 0 0 1-2.76-2.76Z");
}

.lfp0opz-t {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 15.75h.01M17.5 18h.01");
}

.mfrltnbwm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.75 9.08V3.25h-16v12.5h6.04m-6.04-8h16");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.x1jo36kgt {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.5 5.5h.01");
}
</style><g class="ux2u0rbkq"><path class="mfrltnbwm"/><path class="x1jo36kgt"/><path class="ji2xoxycc"/><path class="lfp0opz-t"/></g>`,
		"fallback": "iconoven:session-hijack-sharp",
	});
}

export default Component;
