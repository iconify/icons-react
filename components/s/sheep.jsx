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
		"content": `<style>.fy2ekurds {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 6.75a2 2 0 0 1 3.38.86a2 2 0 0 1 2.09 2.25a2 2 0 0 1 0 2.78a2 2 0 0 1-2.09 2.25a2 2 0 0 1-3.38.86a2 2 0 0 1-3.38-.86a2 2 0 0 1-2.09-2.25a2 2 0 0 1 0-2.78a2 2 0 0 1 2.09-2.25a2 2 0 0 1 3.38-.86m-2.5 9.75v3.25m5-3.25v3.25");
}

.lbt0ceboz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.5 10.25h.01");
}

.sh-o3ibce {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16 9.25c-1 .25-1.9.85-2.5 1.75");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zbosd-bub {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.38 7.94a2.25 3.25-30 1 1 3.24 5.62a2.25 3.25-30 1 1-3.24-5.62");
}
</style><g class="y9tr6bcfx"><path class="fy2ekurds"/><path class="zbosd-bub"/><path class="sh-o3ibce"/><path class="lbt0ceboz"/></g>`,
		"fallback": "iconoven:sheep",
	});
}

export default Component;
