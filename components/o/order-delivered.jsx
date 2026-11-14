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
		"content": `<style>.c-gtj80xc {
  d: path("M13.196 20.367L12 21l-8.5-4.5v-9L12 3l8.5 4.5v5.465M3.5 7.5l6.01 3.182m4.949.016L20.5 7.5M12 12v2");
}

.e9fltbcec {
  d: path("m14.75 18l2 2L21 15.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="c-gtj80xc"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix:order-delivered",
	});
}

export default Component;
