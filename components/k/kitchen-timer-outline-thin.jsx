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
		"content": `<style>.ays356bvr {
  d: path("m12 14 3 -3");
}

.dr_svztcl {
  d: path("M5.5 14a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0 -13 0");
}

.g7fe9zb5k {
  d: path("M10 7.5V4h4v3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dr_svztcl"/><path class="g7fe9zb5k"/><path class="ays356bvr"/></g>`,
		"fallback": "iconmind:kitchen-timer-outline-thin",
	});
}

export default Component;
