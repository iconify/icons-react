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

.phi_2u5da {
  d: path("M6.5 7.5C10 9 14 9 17.5 7.5m-11 2.75c3.5 1.5 7.5 1.5 11 0m-14.75 7c1.54 0 1.54-1 3.08-1s1.54 1 3.08 1s1.54-1 3.08-1s1.54 1 3.08 1s1.54-1 3.08-1s1.54 1 3.08 1m-18.48 3.5c1.54 0 1.54-1 3.08-1s1.54 1 3.08 1s1.54-1 3.08-1s1.54 1 3.08 1s1.54-1 3.08-1s1.54 1 3.08 1");
}

.q6c-e---q {
  cx: 12px;
  cy: 8.75px;
  r: 5.75px;
}
</style><g class="hntgybcog"><circle class="q6c-e---q"/><path class="phi_2u5da"/></g>`,
		"fallback": "iconoven:water-polo-ball",
	});
}

export default Component;
