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
		"content": `<style>.l3403000v {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75a9.25 9.25 0 0 1 0 18.5");
}

.m9bxmpbmx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.83 9.05l3.59 2.4q.83.55 0 1.1l-3.59 2.4q-.83.55-.83-.45v-5q0-1 .83-.45");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zbf076buh {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.61 20.93h.01m-4.16-2.39h.01m-2.4-4.15h.01m-.01-4.78h.01m2.38-4.15h.01m4.14-2.39h.01");
}
</style><g class="y9tr6bcfx"><path class="l3403000v"/><path class="zbf076buh"/><path class="m9bxmpbmx"/></g>`,
		"fallback": "iconoven:slow-motion",
	});
}

export default Component;
