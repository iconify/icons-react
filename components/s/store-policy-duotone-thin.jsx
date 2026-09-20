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

.ppdwmrgka {
  fill: currentColor;
  d: path("M9 12h6v3l-3 3 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tp7101bon {
  d: path("M2 5h20M2 5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0");
}

.ulu3xjbcr {
  d: path("M9 12h6v3l-3 3 -3 -3Z");
}

.yb0d-pkkp {
  d: path("M4 8v14h16V8");
}
</style><g class="hntgybcog"><path class="ppdwmrgka"/><path class="tp7101bon"/><path class="yb0d-pkkp"/><path class="ulu3xjbcr"/></g>`,
		"fallback": "iconmind:store-policy-duotone-thin",
	});
}

export default Component;
