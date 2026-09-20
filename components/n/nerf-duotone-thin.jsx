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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.dktry7bqc {
  fill: currentColor;
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.e6f1ogysf {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 4 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gn_p0sb7q {
  d: path("m3 20 5 -5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.khmg0zb-g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17 12h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qma4xwbji {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 20 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.shqarv4xv {
  d: path("m3 4 5 5");
}

.zy54a7bml {
  d: path("M17 12h4");
}
</style><g class="hntgybcog"><path class="dktry7bqc"/><path class="e6f1ogysf"/><path class="qma4xwbji"/><path class="khmg0zb-g"/><path class="shqarv4xv"/><path class="gn_p0sb7q"/><path class="bo51iypxr"/><path class="zy54a7bml"/></g>`,
		"fallback": "iconmind:nerf-duotone-thin",
	});
}

export default Component;
