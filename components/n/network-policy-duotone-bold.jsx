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
		"content": `<style>.a97qfmbix {
  d: path("M14 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.c4o3x9bhp {
  d: path("M8 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.f2vh026ub {
  d: path("M10 9h4");
}

.h1-eezbzd {
  fill: currentColor;
  d: path("M15 3h5v8l-8 8 -8 -8V3h5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jlgxzd_ny {
  fill: currentColor;
  d: path("M8 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.oyxdwu0be {
  d: path("M15 3h5v8l-8 8 -8 -8V3h5Z");
}

.rlk52sj8y {
  fill: currentColor;
  d: path("M14 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uadefenvd {
  d: path("M7 22h10");
}
</style><g class="s0phu2bbs"><path class="h1-eezbzd"/><path class="jlgxzd_ny"/><path class="rlk52sj8y"/><path class="oyxdwu0be"/><path class="c4o3x9bhp"/><path class="a97qfmbix"/><path class="f2vh026ub"/><path class="uadefenvd"/></g>`,
		"fallback": "iconmind:network-policy-duotone-bold",
	});
}

export default Component;
