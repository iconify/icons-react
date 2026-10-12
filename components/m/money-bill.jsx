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
		"content": `<style>.h1anhm0ud {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 5.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.n19jjrbhf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 12h.01m10.99 0h.01");
}

.nh57_vczm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.81 10.19c-.26-.66-.99-1.16-1.82-1.16c-1.06 0-1.82.59-1.82 1.42c0 1.88 3.8 1.06 3.8 3.07c0 .86-.83 1.45-1.98 1.45c-.89 0-1.65-.49-1.98-1.16M12 7.88v1.16m0 5.93v1.16");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="h1anhm0ud"/><path class="nh57_vczm"/><path class="n19jjrbhf"/></g>`,
		"fallback": "iconoven:money-bill",
	});
}

export default Component;
