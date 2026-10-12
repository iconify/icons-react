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
		"content": `<style>.b6r1_obfb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 17.25h.01m10.49 0h.01");
}

.gqdwd_bjh {
  cx: 17.25px;
  cy: 17.25px;
  r: 4px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rpliwf47n {
  cx: 6.75px;
  cy: 17.25px;
  r: 4px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s6birwpbr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.75 17.25l2.75-6.5l2.5 6.5l4.25-6.5m-6.75 0h6.75m-6.75 0L9 9M7.75 9h2.5m6 1.75l1 6.5m-1-6.5l-.75-2H18M7.75 6.25l3-3.5l2 2.5L14 3.75l2.5 2.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="rpliwf47n"/><circle class="gqdwd_bjh"/><path class="b6r1_obfb"/><path class="s6birwpbr"/></g>`,
		"fallback": "iconoven:mountain-bike",
	});
}

export default Component;
