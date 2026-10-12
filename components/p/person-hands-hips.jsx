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
		"content": `<style>.hhxk24b9g {
  cx: 9.5px;
  cy: 7.25px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t5w7hlb0j {
  d: path("M9.5 12v4.5m-2.25 4.75L9.5 16.5l2.25 4.75M9.5 13L7 16m2.5-3l5-1.5V3");
}
</style><g class="hntgybcog"><circle class="hhxk24b9g"/><path class="t5w7hlb0j"/></g>`,
		"fallback": "iconoven:person-hands-hips",
	});
}

export default Component;
