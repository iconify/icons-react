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

.ri2m-q_tv {
  d: path("M4 3v18M4 6h16M4 18h16m0 -15v18");
}

.yc_r44biv {
  d: path("m8 14 2.5 -2.5L13 14l2.5 -2.5");
}
</style><g class="hntgybcog"><path class="ri2m-q_tv"/><path class="yc_r44biv"/></g>`,
		"fallback": "iconmind:smoke-test-outline-thin",
	});
}

export default Component;
