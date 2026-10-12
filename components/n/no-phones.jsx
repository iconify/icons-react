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

.kv-qovpzt {
  d: path("M10.25 6.5h3.5a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1m1.25 9h1m-7-10l13 13");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="kv-qovpzt"/></g>`,
		"fallback": "iconoven:no-phones",
	});
}

export default Component;
