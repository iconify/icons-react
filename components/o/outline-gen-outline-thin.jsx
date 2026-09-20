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

.k6nj2fbya {
  d: path("M3 5h18");
}

.nmmozg1gr {
  d: path("M7 15h14");
}

.r1-ktgx-e {
  d: path("M7 10h14");
}

.t33f_gbzo {
  d: path("M11 20h10");
}
</style><g class="hntgybcog"><path class="k6nj2fbya"/><path class="r1-ktgx-e"/><path class="nmmozg1gr"/><path class="t33f_gbzo"/></g>`,
		"fallback": "iconmind:outline-gen-outline-thin",
	});
}

export default Component;
