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

.j0u1rb61l {
  d: path("M4.75 10h14.5A1.75 1.75 0 0 1 21 11.75v7a1.75 1.75 0 0 1-1.75 1.75H4.75A1.75 1.75 0 0 1 3 18.75v-7A1.75 1.75 0 0 1 4.75 10M3 10V8.5C3 5.75 6.5 4 12 4s9 1.75 9 4.5V10");
}

.ksvxky0ac {
  d: path("M12 8.5za1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-1A1.5 1.5 0 0 1 12 8.5m-9 6h6m6 0h6");
}
</style><g class="hntgybcog"><path class="j0u1rb61l"/><path class="ksvxky0ac"/></g>`,
		"fallback": "uix:total-rewards",
	});
}

export default Component;
