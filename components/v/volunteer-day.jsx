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

.kgkobrbnx {
  d: path("M12 11.5S7.5 9 7.5 5.75C7.5 4.25 8.6 3 10 3c.9 0 1.6.5 2 1.25C12.4 3.5 13.1 3 14 3c1.4 0 2.5 1.25 2.5 2.75C16.5 9 12 11.5 12 11.5M2.5 15h3L9 17h4.25a1.25 1.25 0 0 1 0 2.5H9.5");
}

.w0zq_0brj {
  d: path("M5.5 21H13l7-4.5c.75-.5.5-1.75-.5-1.75c-.5 0-1.25.5-3.5 1.75");
}
</style><g class="hntgybcog"><path class="kgkobrbnx"/><path class="w0zq_0brj"/></g>`,
		"fallback": "uix:volunteer-day",
	});
}

export default Component;
