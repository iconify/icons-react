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

.p-p6aacap {
  d: path("M7.25 6h.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5v-1A1.5 1.5 0 0 1 7.25 6m9 0h.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5M12 6.75h.01M12 9.25h.01");
}

.t7s369atp {
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5v3A3.5 3.5 0 0 1 18 13H6a3.5 3.5 0 0 1-3.5-3.5v-3A3.5 3.5 0 0 1 6 3m6 10v8.5");
}
</style><g class="hntgybcog"><path class="t7s369atp"/><path class="p-p6aacap"/></g>`,
		"fallback": "uix:ski-race-timer",
	});
}

export default Component;
