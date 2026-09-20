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
		"content": `<style>.bajpbp5cl {
  fill: currentColor;
  d: path("M5 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ejc-ljj9t {
  fill: currentColor;
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fvqqwwb8g {
  fill: currentColor;
  d: path("M17 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gswswg2-b {
  d: path("M5 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hc7fbd-jo {
  d: path("M4 19h16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hv3ppsbji {
  d: path("M11 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.korq7_l8k {
  d: path("M17 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.m-p3hbclp {
  d: path("M4 15h16");
}

.w_snsacfd {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.w2535ybvu {
  fill: currentColor;
  d: path("M11 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="ejc-ljj9t"/><path class="bajpbp5cl"/><path class="w2535ybvu"/><path class="fvqqwwb8g"/><path class="w_snsacfd"/><path class="gswswg2-b"/><path class="hv3ppsbji"/><path class="korq7_l8k"/><path class="m-p3hbclp"/><path class="hc7fbd-jo"/></g>`,
		"fallback": "iconmind:navbar-duotone-thin",
	});
}

export default Component;
