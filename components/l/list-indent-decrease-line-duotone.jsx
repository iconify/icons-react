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

.pxuv15bph {
  d: path("M6.5714 9L4 12L6.5714 15");
}

.w85zccbro {
  d: path("M3 6H21M11 10H21M11 14H21M3 18H21");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="hntgybcog"><path class="w85zccbro"/><path class="pxuv15bph"/></g>`,
		"fallback": "solar:list-indent-decrease-line-duotone",
	});
}

export default Component;
