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

.ku-nu0bsg {
  d: path("M6 7.5h12V10h2.5v7.5H18v-2H6v2H3.5V10H6Z");
}

.tg52n2bme {
  d: path("M8.5 15.5v4h2m5-4v4h-2M9 7.5v-2H7v-2m8 4v-2h2v-2M9.5 11h.01m4.99 0h.01");
}
</style><g class="hntgybcog"><path class="ku-nu0bsg"/><path class="tg52n2bme"/></g>`,
		"fallback": "uix:pixel-alien",
	});
}

export default Component;
