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

.if5ft31dv {
  d: path("M11 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.n3p0zmbop {
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.xlz01ub4s {
  d: path("M11 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="xlz01ub4s"/><path class="n3p0zmbop"/><path class="if5ft31dv"/></g>`,
		"fallback": "iconmind:more-vertical-outline-thin",
	});
}

export default Component;
