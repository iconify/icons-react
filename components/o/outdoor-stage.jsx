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

.m2imwmb9l {
  d: path("M2.5 13a9.5 9.5 0 0 1 19 0M4 13h16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 16H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 13m1.5 3v4.5m13-4.5v4.5");
}

.xd3fvew_d {
  d: path("M6 13a6 6 0 0 1 12 0");
}
</style><g class="hntgybcog"><path class="m2imwmb9l"/><path class="xd3fvew_d"/></g>`,
		"fallback": "uix:outdoor-stage",
	});
}

export default Component;
