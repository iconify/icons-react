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
		"content": `<style>.bpgy4bnoy {
  d: path("M12 9.75A3.25 3.25 0 1 1 8.75 13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ohf0s6bon {
  d: path("M7.375 2.5h9.25A4.375 4.375 0 0 1 21 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 17.125V6.875A4.375 4.375 0 0 1 7.375 2.5");
}

.t6tiwebme {
  d: path("M7.5 14.25L8.75 13L10 14.25");
}

.zrg012bhi {
  d: path("M5.5 13a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}
</style><g class="hntgybcog"><path class="ohf0s6bon"/><path class="zrg012bhi"/><path class="bpgy4bnoy"/><path class="t6tiwebme"/></g>`,
		"fallback": "uix:spin-cycle",
	});
}

export default Component;
