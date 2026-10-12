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
		"content": `<style>.an9l3ju_g {
  cx: 9.5px;
  cy: 8px;
  r: 5.25px;
}

.bs8ao7ncv {
  d: path("M9.5 13.25v5m-6.5 3c1-2.25 3.5-3 6.5-3s5.5.75 6.5 3Zm15.5-18V13m-1.75 0h3.5v2.75a1.75 1.75 0 0 1-3.5 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="an9l3ju_g"/><path class="bs8ao7ncv"/></g>`,
		"fallback": "iconoven:tree-plant",
	});
}

export default Component;
