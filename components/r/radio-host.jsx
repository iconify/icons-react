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

.jf30xkbeq {
  d: path("M7.75 10.25a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0M5 21.5c0-1.5 3-2.75 7-2.75s7 1.25 7 2.75m-1.25-8.25a2.5 2.5 0 0 1-2.5 2.5");
}

.kdjjdj09p {
  d: path("M6.25 8.25a5.75 5.75 0 0 1 11.5 0m-11.5 0za1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5m11.5 0za1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="kdjjdj09p"/><path class="jf30xkbeq"/></g>`,
		"fallback": "uix:radio-host",
	});
}

export default Component;
