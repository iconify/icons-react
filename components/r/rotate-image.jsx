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
		"content": `<style>.ccrg9bb5j {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.75 21.25l3.75-3.75a1.4 1.4 0 0 1 2 0l1.75 1.75m-2-15.5H13a6 6 0 0 1 6 6v2");
}

.k5wsglbre {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 13.5h.01");
}

.krrr2ufus {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.75 9.5L19 11.75l2.25-2.25");
}

.wabgcc_pk {
  width: 11.5px;
  height: 11.5px;
  x: 2.75px;
  y: 9.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="wabgcc_pk"/><path class="k5wsglbre"/><path class="ccrg9bb5j"/><path class="krrr2ufus"/></g>`,
		"fallback": "iconoven:rotate-image",
	});
}

export default Component;
