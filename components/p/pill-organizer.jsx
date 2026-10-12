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
		"content": `<style>.d2-k4actr {
  width: 18.5px;
  height: 10px;
  x: 2.75px;
  y: 9px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.e2a7313fg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.4 9v10M12 9v10m4.6-10v10");
}

.qs1w1y4xi {
  width: 6.5px;
  height: 3px;
  x: 2.75px;
  y: 3px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.w_n6acb1d {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.1 14h.01m4.59 0h.01m4.59 0h.01m4.59 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="qs1w1y4xi"/><rect class="d2-k4actr"/><path class="e2a7313fg"/><path class="w_n6acb1d"/></g>`,
		"fallback": "iconoven:pill-organizer",
	});
}

export default Component;
