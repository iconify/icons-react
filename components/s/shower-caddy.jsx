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
		"content": `<style>.eldei4bgr {
  d: path("M8.5 8.5h3V10l1.5 1.5v6.75H7V11.5L8.5 10Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.va-f73bkm {
  d: path("M2.5 5h19m-18 7v6.75A2.25 2.25 0 0 0 5.75 21h11A2.25 2.25 0 0 0 19 18.75V5a2 2 0 0 0-4 0v1.5");
}
</style><g class="hntgybcog"><path class="va-f73bkm"/><path class="eldei4bgr"/></g>`,
		"fallback": "uix:shower-caddy",
	});
}

export default Component;
