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

.n6vxtabal {
  d: path("M2.5 15.5a9.5 6 0 1 0 19 0a9.5 6 0 1 0-19 0m5.5-3V4");
}

.vthzcsugq {
  d: path("M15.5 12.5v-5c0-3.5 3.5-4 5-1.5M6 15.5h.01M15.5 18h.01");
}
</style><g class="hntgybcog"><path class="n6vxtabal"/><path class="vthzcsugq"/></g>`,
		"fallback": "uix:potato-battery",
	});
}

export default Component;
