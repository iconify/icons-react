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
		"content": `<style>.d_e3or1ph {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 13.75h11.5v6a1.5 1.5 0 0 1-1.5 1.5h-8.5a1.5 1.5 0 0 1-1.5-1.5Z");
}

.dbxmtdbha {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.75 9.5h.01");
}

.ia68ed4ig {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.25 19.75l3-3L12 19.5m-.75-1l1.25-1.25l2.5 2.5");
}

.m-ovmuvaa {
  width: 18.5px;
  height: 7.5px;
  x: 2.75px;
  y: 6.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.ps570sbdu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 6.25v-2.5a1 1 0 0 1 1-1h8.5a1 1 0 0 1 1 1v2.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ps570sbdu"/><rect class="m-ovmuvaa"/><path class="dbxmtdbha"/><path class="d_e3or1ph"/><path class="ia68ed4ig"/></g>`,
		"fallback": "iconoven:photo-print",
	});
}

export default Component;
