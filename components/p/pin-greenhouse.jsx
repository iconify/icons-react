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
		"content": `<style>.hf18p1lnb {
  d: path("M3 20.5v-8a9 9 0 0 1 18 0v8Zm.25-10h17.5M12 3.5v7m0 10V15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ybazt3bfp {
  d: path("M12 17.5c0-2-1.75-3.25-4-3.25c0 2 1.75 3.25 4 3.25m0-1c0-2 1.75-3.25 4-3.25c0 2-1.75 3.25-4 3.25");
}
</style><g class="hntgybcog"><path class="hf18p1lnb"/><path class="ybazt3bfp"/></g>`,
		"fallback": "uix:pin-greenhouse",
	});
}

export default Component;
