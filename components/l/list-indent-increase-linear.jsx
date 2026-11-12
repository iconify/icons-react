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
		"content": `<style>.cr-sgnwzx {
  d: path("M3 18H21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p21p-tbxv {
  d: path("M4 9L6.5714 12L4 15");
}

.pn42l3bzi {
  d: path("M11 14H21");
}

.q4wmzff-d {
  d: path("M11 10H21");
}

.zpfjf0vyp {
  d: path("M3 6H21");
}
</style><g class="hntgybcog"><path class="zpfjf0vyp"/><path class="q4wmzff-d"/><path class="pn42l3bzi"/><path class="cr-sgnwzx"/><path class="p21p-tbxv"/></g>`,
		"fallback": "solar:list-indent-increase-linear",
	});
}

export default Component;
