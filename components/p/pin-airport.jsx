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

.npjpd9b9n {
  d: path("M12 5.5c.5 0 .75.5.75 1V8l2.75 1.5v1l-2.75-.75v1.75l1 .5v.75l-1.75-.5l-1.75.5V12l1-.5V9.75l-2.75.75v-1L11.25 8V6.5c0-.5.25-1 .75-1");
}

.r470zbg-b {
  d: path("M12 21.5S4.5 15 4.5 9.5a7.5 7.5 0 0 1 15 0c0 5.5-7.5 12-7.5 12");
}
</style><g class="hntgybcog"><path class="r470zbg-b"/><path class="npjpd9b9n"/></g>`,
		"fallback": "uix:pin-airport",
	});
}

export default Component;
