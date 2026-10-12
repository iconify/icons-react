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

.z6mn5k9sv {
  d: path("M7.75 9.75h8.5M14 7.5l2.25 2.25L14 12m2.25 2.25h-8.5M10 12l-2.25 2.25L10 16.5");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="z6mn5k9sv"/></g>`,
		"fallback": "iconoven:transaction",
	});
}

export default Component;
