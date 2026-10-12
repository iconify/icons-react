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

.kc9-v-u-y {
  cx: 10.25px;
  cy: 10.25px;
  r: 6.75px;
}

.qh8fg0oaf {
  d: path("m15.25 15.25l6 6M7.75 13v-2m2.5 2V7.5m2.5 5.5V9.5");
}
</style><g class="hntgybcog"><circle class="kc9-v-u-y"/><path class="qh8fg0oaf"/></g>`,
		"fallback": "iconoven:market-research",
	});
}

export default Component;
