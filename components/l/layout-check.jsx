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

.n1x6b9fii {
  d: path("M3.5 7.5L12 12l8.5-4.5M12 12v5.9m0 .2V21M3.5 9h17M9 9v11.5m5.75-2.5l2 2L21 15.75");
}

.oftf-ccwf {
  d: path("M13.196 20.367L12 21l-8.5-4.5v-9L12 3l8.5 4.5v5.465");
}
</style><g class="hntgybcog"><path class="oftf-ccwf"/><path class="n1x6b9fii"/></g>`,
		"fallback": "uix:layout-check",
	});
}

export default Component;
