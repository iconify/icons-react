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
		"content": `<style>.bh8e4ub0k {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.75 18.75l-1.25 2.5m7.75-2.5l1.25 2.5");
}

.d4lxcxbja {
  width: 13.5px;
  height: 11.5px;
  x: 5.25px;
  y: 7.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.uvpb0bmgi {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 15.5h.01m6.49 0h.01");
}

.v6jktnbgq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.75h7m-5.5 0l2 4.5l2-4.5M5.25 12.5h13.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="d4lxcxbja"/><path class="v6jktnbgq"/><path class="uvpb0bmgi"/><path class="bh8e4ub0k"/></g>`,
		"fallback": "iconoven:tram",
	});
}

export default Component;
