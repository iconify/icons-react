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
		"content": `<style>.etvx_o1hc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.53 14.53l4.94 4.94");
}

.k8u4bvbnt {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 7.5h.01M11.5 12h.01");
}

.kw_hpfzev {
  width: 12.5px;
  height: 16.5px;
  x: 3.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.qqcwscbod {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 12.5L12 7");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ywzhblbsk {
  cx: 17px;
  cy: 17px;
  r: 4.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="y9tr6bcfx"><rect class="kw_hpfzev"/><path class="qqcwscbod"/><path class="k8u4bvbnt"/><circle class="ywzhblbsk"/><path class="etvx_o1hc"/></g>`,
		"fallback": "iconoven:tax-free",
	});
}

export default Component;
