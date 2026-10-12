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

.jq6edmbev {
  d: path("M7.75 16.5L11.5 13l3 2l5-4.5m-11.75 0l3.75-3l3 2.5l5-4.5");
}

.ux32n0bfz {
  d: path("M3.75 3.75v14.5a2 2 0 0 0 2 2h14.5");
}
</style><g class="hntgybcog"><path class="ux32n0bfz"/><path class="jq6edmbev"/></g>`,
		"fallback": "iconoven:line-chart-dual",
	});
}

export default Component;
