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
		"content": `<style>.lo0rkwbmg {
  d: path("M18 6v7");
}

.lo7kp72nh {
  d: path("M3 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nimfanbbl {
  d: path("M6 11v6");
}

.p4jzd4blg {
  d: path("M17 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="lo7kp72nh"/><path class="nimfanbbl"/><path class="lo0rkwbmg"/><path class="p4jzd4blg"/></g>`,
		"fallback": "iconmind:location-alert-outline-bold",
	});
}

export default Component;
