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

.kj_g7_bka {
  cx: 12px;
  cy: 7.5px;
  r: 4.75px;
}

.u-vcy-btd {
  d: path("M9.75 8.5a2.25 2.25 0 0 1 4.5 0M12 9.75l.75-1.5m-.75 4v5.5m-9.25 3.5c1.5-2.5 5-3.75 9.25-3.75s7.75 1.25 9.25 3.75Z");
}
</style><g class="hntgybcog"><circle class="kj_g7_bka"/><path class="u-vcy-btd"/></g>`,
		"fallback": "iconoven:ph-meter-soil",
	});
}

export default Component;
