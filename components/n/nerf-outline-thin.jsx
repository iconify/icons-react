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

.shqarv4xv {
  d: path("m3 4 5 5");
}

.zy54a7bml {
  d: path("M17 12h4");
}
</style><g class="hntgybcog"><path class="shqarv4xv"/><path class="gn_p0sb7q"/><path class="bo51iypxr"/><path class="zy54a7bml"/></g>`,
		"fallback": "iconmind:nerf-outline-thin",
	});
}

export default Component;
