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

.s8mod7bty {
  d: path("m16.5 7.75l1.5 1.5l-1.5 1.5m-10.5 4h12m-10.5-1.5L6 14.75l1.5 1.5");
}

.ym3ll6nac {
  d: path("M6.875 5h10.25A4.375 4.375 0 0 1 21.5 9.375v5.25A4.375 4.375 0 0 1 17.125 19H6.875A4.375 4.375 0 0 1 2.5 14.625v-5.25A4.375 4.375 0 0 1 6.875 5M6 9.25h12");
}
</style><g class="hntgybcog"><path class="ym3ll6nac"/><path class="s8mod7bty"/></g>`,
		"fallback": "uix:mvhr-unit",
	});
}

export default Component;
