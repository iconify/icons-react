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
		"content": `<style>.awbnzlbsi {
  d: path("m12.75 8.75l-2 5.75l3 2.75v4m-3-6.75l-2.5 6.75m-1-9l1.75-3l3.5-.5l2.25 3l2.75 1");
}

.f8bnpgb3l {
  cx: 13.5px;
  cy: 4.5px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="f8bnpgb3l"/><path class="awbnzlbsi"/></g>`,
		"fallback": "iconoven:walk",
	});
}

export default Component;
