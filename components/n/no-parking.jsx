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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sm10-sbzm {
  d: path("M9.5 17V7h3a3 3 0 0 1 0 6h-3m-4-7.5l13 13");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="sm10-sbzm"/></g>`,
		"fallback": "iconoven:no-parking",
	});
}

export default Component;
