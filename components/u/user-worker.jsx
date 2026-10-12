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

.rog-qx9ky {
  d: path("M6.5 21h11a.75.75 0 0 0 .75-.75c0-1.71-2.81-3-6.25-3s-6.25 1.29-6.25 3a.75.75 0 0 0 .75.75M6.25 8.25h11.5M8 8.25a4 4 0 0 1 8 0");
}

.yowus8bnh {
  cx: 12px;
  cy: 12.75px;
  r: 2.25px;
}
</style><g class="hntgybcog"><circle class="yowus8bnh"/><path class="rog-qx9ky"/></g>`,
		"fallback": "iconoven:user-worker",
	});
}

export default Component;
