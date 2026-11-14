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
		"content": `<style>.a45fk9b8x {
  d: path("M21.5 13.5h-4a2.25 2.25 0 0 0 0 4.5h4m-17-8V4.5A1.5 1.5 0 0 1 6 3h8a1.5 1.5 0 0 1 1.5 1.5v2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qfksddcpx {
  d: path("M9.5 10V8.25a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 1.5 1.5V10");
}

.ytb6l0bxf {
  d: path("M6.875 10h10.25a4.375 4.375 0 0 1 4.375 4.375v2.75a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125v-2.75A4.375 4.375 0 0 1 6.875 10");
}
</style><g class="hntgybcog"><path class="ytb6l0bxf"/><path class="a45fk9b8x"/><path class="qfksddcpx"/></g>`,
		"fallback": "uix:wallet-cards",
	});
}

export default Component;
