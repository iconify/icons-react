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
		"content": `<style>.hjlkcc9dp {
  cx: 12px;
  cy: 11.25px;
  r: 2.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lgzx_1ilx {
  d: path("M7.25 21.25h9.5a.75.75 0 0 0 .75-.75c0-2.25-2.53-3.75-5.5-3.75s-5.5 1.5-5.5 3.75a.75.75 0 0 0 .75.75M8.5 5.5L12 2.75l3.5 2.75");
}
</style><g class="hntgybcog"><circle class="hjlkcc9dp"/><path class="lgzx_1ilx"/></g>`,
		"fallback": "iconoven:promotion",
	});
}

export default Component;
