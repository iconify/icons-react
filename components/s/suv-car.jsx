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

.ki2rnfk5a {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 15.5v-1.75q0-1.25 1-1.62q1-.38 1.42-1.56l1.41-3.89Q7 5.5 8.25 5.5H20q1.25 0 1.25 1.25v8.75q0 1.25-1.25 1.25H4q-1.25 0-1.25-1.25");
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

.so4td8b4k {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.17 11.53l.91-2.56q.17-.47.67-.47H12q.5 0 .5.5v2.5q0 .5-.5.5H8.5q-.5 0-.33-.47M16 8.5h2q.5 0 .5.5v2.5q0 .5-.5.5h-2q-.5 0-.5-.5V9q0-.5.5-.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ki2rnfk5a"/><path class="so4td8b4k"/><circle class="r_0b548wt"/><path class="ox2ue_b-w"/><circle class="hha4cxblz"/><path class="l0haxibzw"/></g>`,
		"fallback": "iconoven:suv-car",
	});
}

export default Component;
