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
		"content": `<style>.bciwdmauy {
  d: path("M11.5 11.5A5.5 5.5 0 0 1 17 17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qm9w97bhy {
  d: path("M15.25 15.25L17 17l1.75-1.75");
}

.wmvdrf9zp {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5M2.5 8h19M8 2.5v19");
}
</style><g class="hntgybcog"><path class="wmvdrf9zp"/><path class="bciwdmauy"/><path class="qm9w97bhy"/></g>`,
		"fallback": "uix:table-pivot",
	});
}

export default Component;
