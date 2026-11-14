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
		"content": `<style>.do16zub0f {
  fill: currentColor;
  d: path("M7.5 6h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hyj2q868g {
  d: path("M6.25 3h2.5a1.75 1.75 0 0 1 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 4.5 9.75v-5A1.75 1.75 0 0 1 6.25 3M4 11.5h16c0 3.5-2.5 5.5-6 6l1 3.5H8l.5-4c-3-1-4.5-3-4.5-5.5");
}
</style><g class="hntgybcog"><path class="hyj2q868g"/><path class="do16zub0f"/></g>`,
		"fallback": "uix:pin-toilet",
	});
}

export default Component;
