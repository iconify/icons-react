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

.im_tpbc2k {
  d: path("M6.5 21h11a.75.75 0 0 0 .75-.75C18.25 18.4 15.44 17 12 17s-6.25 1.4-6.25 3.25a.75.75 0 0 0 .75.75M8.75 8.5v-1A2 2 0 0 1 10 3.85a2.5 2.5 0 0 1 4 0a2 2 0 0 1 1.25 3.65v1Z");
}

.m6vuywbjz {
  cx: 12px;
  cy: 12.75px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="m6vuywbjz"/><path class="im_tpbc2k"/></g>`,
		"fallback": "iconoven:user-chef",
	});
}

export default Component;
