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

.z4qjyey6v {
  d: path("m7.5 8.25l2.25 1.5l-2.25 1.5m9-3l-2.25 1.5l2.25 1.5m-9.5 2h10a5 5 0 0 1-10 0");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="z4qjyey6v"/></g>`,
		"fallback": "iconoven:laugh",
	});
}

export default Component;
