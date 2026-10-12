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

.l0haxibzw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 19h.01");
}

.mjicdabar {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.25a1 1 0 0 1 1-1h7.5v-3.5a1 1 0 0 1 1-1h3.4a1.5 1.5 0 0 1 1.3.75L19 10.25h1.25a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1Z");
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

.z595flpel {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 5.75v4.5h4");
}
</style><g class="y9tr6bcfx"><path class="mjicdabar"/><path class="z595flpel"/><circle class="r_0b548wt"/><path class="ox2ue_b-w"/><circle class="hha4cxblz"/><path class="l0haxibzw"/></g>`,
		"fallback": "iconoven:pickup-truck",
	});
}

export default Component;
