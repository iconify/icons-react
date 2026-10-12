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
		"content": `<style>.b72yrwb4z {
  width: 5.5px;
  height: 4px;
  x: 13.25px;
  y: 10px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 0.75px;
}

.jr97ekbvz {
  width: 18.5px;
  height: 14.5px;
  x: 2.75px;
  y: 4.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.75px;
}

.vgi7r_3nt {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 7.25h.01m3.99 0h.01m3.99 0h.01m3.99 0h.01M6 16.75h.01m3.99 0h.01m3.99 0h.01m3.99 0h.01");
}

.vphmwqbdj {
  width: 5.5px;
  height: 4px;
  x: 5.25px;
  y: 10px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 0.75px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="jr97ekbvz"/><path class="vgi7r_3nt"/><rect class="vphmwqbdj"/><rect class="b72yrwb4z"/></g>`,
		"fallback": "iconoven:negative-strip",
	});
}

export default Component;
