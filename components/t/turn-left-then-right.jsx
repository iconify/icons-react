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
		"content": `<style>.fud-zw_3g {
  d: path("M15 21v-4.5a2 2 0 0 0-2-2H7a2 2 0 0 1-2-2V8.75a2 2 0 0 1 2-2h12.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k-luzcczh {
  d: path("m16.75 4l2.75 2.75l-2.75 2.75");
}
</style><g class="hntgybcog"><path class="fud-zw_3g"/><path class="k-luzcczh"/></g>`,
		"fallback": "uix:turn-left-then-right",
	});
}

export default Component;
