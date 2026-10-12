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

.v1tklhylv {
  d: path("M6.5 9h10v2.75h-6L9.75 16H7.5l.5-4.25H6.5Zm4.25 2.75v1.5h1.5M5.5 5.5l13 13");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="v1tklhylv"/></g>`,
		"fallback": "iconoven:no-guns",
	});
}

export default Component;
