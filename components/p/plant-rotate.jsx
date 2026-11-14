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

.j10uqqbsx {
  d: path("M6.066 15h5.868a1.75 1.75 0 0 1 1.726 2.038l-.416 2.5A1.75 1.75 0 0 1 11.518 21H6.482a1.75 1.75 0 0 1-1.726-1.462l-.416-2.5A1.75 1.75 0 0 1 6.066 15M9 15v-5m0 0c0-3-2-5-5-5c0 3 2 5 5 5m0 0c0-2.5 1.5-4.5 4.5-4.5C13.5 8 11.75 9.75 9 10m7.75-6.227a9.5 9.5 0 0 1 0 16.454");
}

.llo3vibby {
  d: path("m17.5 17.25l-.75 3l3 .75");
}
</style><g class="hntgybcog"><path class="j10uqqbsx"/><path class="llo3vibby"/></g>`,
		"fallback": "uix:plant-rotate",
	});
}

export default Component;
