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
		"content": `<style>.kpn0pcbtz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.25c5.75 3 12.75 3 18.5 0");
}

.m82_-5tka {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.48 4.04l3.04.92Q8 5.1 8 5.6V10q0 .5-.5.5h-3q-.5 0-.5-.5V4.4q0-.5.48-.36");
}

.n9vzqgq8i {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 5.6h2q.5 0 .37.48l-1.24 4.44q-.13.48-.26 0l-1.24-4.44q-.13-.48.37-.48m5.48-.64l3.04-.92q.48-.14.48.36V10q0 .5-.5.5h-3q-.5 0-.5-.5V5.6q0-.5.48-.64M17 9.25l2-3");
}

.plx4y6zts {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 7.75h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="kpn0pcbtz"/><path class="m82_-5tka"/><path class="plx4y6zts"/><path class="n9vzqgq8i"/></g>`,
		"fallback": "iconoven:signal-flags",
	});
}

export default Component;
