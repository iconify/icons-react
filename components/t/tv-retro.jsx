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
		"content": `<style>.mo5vbrbut {
  width: 9.5px;
  height: 9.5px;
  x: 5.75px;
  y: 6.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.okjl2nb_u {
  width: 18.5px;
  height: 15.5px;
  x: 2.75px;
  y: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.t-g_mhbss {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.25 8.75h.01m-.01 4h.01");
}

.tcdjnulzv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 19.25v2m11.5-2v2");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="okjl2nb_u"/><rect class="mo5vbrbut"/><path class="t-g_mhbss"/><path class="tcdjnulzv"/></g>`,
		"fallback": "iconoven:tv-retro",
	});
}

export default Component;
