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

.w1aup7bvj {
  d: path("M7.5 14.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3-3v6");
}

.wojyevv_d {
  d: path("M3 3h13.5v16a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V6.5Zm13.5 3H18a2.5 2.5 0 0 1 2.5 2.5V13a2.5 2.5 0 0 1-2.5 2.5h-1.5m-12-7h12");
}
</style><g class="hntgybcog"><path class="wojyevv_d"/><path class="w1aup7bvj"/></g>`,
		"fallback": "uix:lemon-water",
	});
}

export default Component;
