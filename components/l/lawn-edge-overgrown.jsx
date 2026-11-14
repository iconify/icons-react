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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tizfk8liw {
  d: path("M2.5 14h10v5.5h9M3.5 14V4.5m3 9.5V3.5");
}

.y5eaeab_f {
  d: path("M9.5 14q5.5-8 10 1.5");
}
</style><g class="hntgybcog"><path class="tizfk8liw"/><path class="y5eaeab_f"/></g>`,
		"fallback": "uix:lawn-edge-overgrown",
	});
}

export default Component;
