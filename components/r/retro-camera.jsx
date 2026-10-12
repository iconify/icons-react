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
		"content": `<style>.awoxikbvr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9.25v-1.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5Zm4 2.5a3.25 3.25 0 1 1 0 6.5a3.25 3.25 0 0 1 0-6.5m4.5-5v2.5M10.75 4a2.75 2.75 0 0 0 5.5 0");
}

.gvxi5pmpg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.5 4h.01");
}

.mrt-0tbsk {
  width: 12.5px;
  height: 11.75px;
  x: 2.75px;
  y: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="mrt-0tbsk"/><path class="awoxikbvr"/><path class="gvxi5pmpg"/></g>`,
		"fallback": "iconoven:retro-camera",
	});
}

export default Component;
