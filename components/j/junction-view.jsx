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

.l7cfyfi7s {
  d: path("M5 9.75V5h4.75m4.5 0H19v4.75M7.5 21.5V16L3 11.5m13.5 10V16l4.5-4.5");
}

.wir3l_cnj {
  d: path("M12 20.5V12L5 5m7 7l7-7");
}
</style><g class="hntgybcog"><path class="wir3l_cnj"/><path class="l7cfyfi7s"/></g>`,
		"fallback": "uix:junction-view",
	});
}

export default Component;
