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
		"content": `<style>.hha4cxblz {
  cx: 17px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i6s2fsb3d {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 8V5.5h3V8m-3.75 4.25h5.75m5.25 4.5V10.5a1 1 0 0 1 1-1h.85a1.5 1.5 0 0 1 1.25.67L21 11.9a1.5 1.5 0 0 1 .25.83v4.02Z");
}

.iw_oo1fxw {
  width: 11.75px;
  height: 8.75px;
  x: 2.75px;
  y: 8px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 3px;
}

.l0haxibzw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 19h.01");
}

.ox2ue_b-w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 19h.01");
}

.r_0b548wt {
  cx: 7px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="iw_oo1fxw"/><path class="i6s2fsb3d"/><circle class="r_0b548wt"/><path class="ox2ue_b-w"/><circle class="hha4cxblz"/><path class="l0haxibzw"/></g>`,
		"fallback": "iconoven:tanker-truck",
	});
}

export default Component;
