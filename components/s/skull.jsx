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

.ix2v_kuzw {
  d: path("M5.5 11c0-4.5 3-7.5 6.5-7.5s6.5 3 6.5 7.5c0 2.5-1.25 3.75-2.5 4.5v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3c-1.25-.75-2.5-2-2.5-4.5");
}

.uo6wycb2j {
  d: path("M8 11a1.25 1.25 0 1 0 2.5 0A1.25 1.25 0 1 0 8 11m5.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M12 17v3.5");
}
</style><g class="hntgybcog"><path class="ix2v_kuzw"/><path class="uo6wycb2j"/></g>`,
		"fallback": "uix:skull",
	});
}

export default Component;
