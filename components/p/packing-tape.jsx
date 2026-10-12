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

.lwx762bnj {
  d: path("M6 9.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m3.25 6.5h12L20 17.5l1.25 1.75h-12Z");
}

.z0rxcxb0v {
  cx: 9.25px;
  cy: 9.25px;
  r: 6.5px;
}
</style><g class="hntgybcog"><circle class="z0rxcxb0v"/><path class="lwx762bnj"/></g>`,
		"fallback": "iconoven:packing-tape",
	});
}

export default Component;
