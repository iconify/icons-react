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
		"content": `<style>.n20rrfbtd {
  cx: 12px;
  cy: 10.5px;
  r: 3px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s9z4qbqbv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 16h8m-6.5 0l.75 1.5L11 16m2 0l.75 1.5l.75-1.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ziv_krbab {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 19.5V11a7.75 7.75 0 0 1 15.5 0v8.5A1.75 1.75 0 0 1 18 21.25H6a1.75 1.75 0 0 1-1.75-1.75M7.5 4.75l-1.5-2m10.5 2l1.5-2");
}

.zrnuaslnh {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 10.5h.01");
}
</style><g class="y9tr6bcfx"><path class="ziv_krbab"/><circle class="n20rrfbtd"/><path class="zrnuaslnh"/><path class="s9z4qbqbv"/></g>`,
		"fallback": "iconoven:monster",
	});
}

export default Component;
