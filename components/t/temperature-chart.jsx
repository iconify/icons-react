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
		"content": `<style>.ev5ytue4h {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m-2.25 13v-3a1.5 1.5 0 0 1 3 0v3a2.5 2.5 0 1 1-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wc23aqbga {
  d: path("M3.5 3v17.5H13");
}
</style><g class="hntgybcog"><path class="wc23aqbga"/><path class="ev5ytue4h"/></g>`,
		"fallback": "uix:temperature-chart",
	});
}

export default Component;
