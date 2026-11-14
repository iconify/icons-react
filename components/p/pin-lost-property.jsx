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
		"content": `<style>.gq7tyut-x {
  d: path("M10 13.5a2 2 0 1 1 2 2v.5m0 2.25h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o156wc1kf {
  d: path("M4.25 3.5h15.5a1.75 1.75 0 0 1 1.75 1.75v.5a1.75 1.75 0 0 1-1.75 1.75H4.25A1.75 1.75 0 0 1 2.5 5.75v-.5A1.75 1.75 0 0 1 4.25 3.5m2.375 4h10.75A2.625 2.625 0 0 1 20 10.125v8.75a2.625 2.625 0 0 1-2.625 2.625H6.625A2.625 2.625 0 0 1 4 18.875v-8.75A2.625 2.625 0 0 1 6.625 7.5");
}
</style><g class="hntgybcog"><path class="o156wc1kf"/><path class="gq7tyut-x"/></g>`,
		"fallback": "uix:pin-lost-property",
	});
}

export default Component;
