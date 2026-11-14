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

.mwh5-yjtd {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5M2.5 9h19");
}

.xkle0icxz {
  d: path("m5.5 5l1.25 1.5L8 5m3 .75h7M6.5 9v8m0-4H9m-2.5 4H9m2.5-4H18m-6.5 4H16");
}
</style><g class="hntgybcog"><path class="mwh5-yjtd"/><path class="xkle0icxz"/></g>`,
		"fallback": "uix:table-group-by",
	});
}

export default Component;
