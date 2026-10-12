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
		"content": `<style>.d8mt2_n-r {
  cx: 12px;
  cy: 12px;
  r: 6.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lrtf_8vxb {
  d: path("M18.17 6.86a9.75 3.25-25.71 1 1-14.03 6.76");
}
</style><g class="hntgybcog"><circle class="d8mt2_n-r"/><path class="lrtf_8vxb"/></g>`,
		"fallback": "iconoven:planet",
	});
}

export default Component;
