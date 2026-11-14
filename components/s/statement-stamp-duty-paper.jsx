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

.ii0-lxbim {
  d: path("M8.875 2.5h6.25A4.375 4.375 0 0 1 19.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-6.25A4.375 4.375 0 0 1 4.5 17.125V6.875A4.375 4.375 0 0 1 8.875 2.5m2.625 3h1m1 0h1m1 0h1m0 1v1m0 1v1");
}

.sa7b6bcxs {
  d: path("M16.5 10.5v.5H16m-1 0h-1m-1 0h-1m-.5-.5v-1m0-1v-1m0-1v-1m-4 1H9m-1.5 8h9m-9 3.5H13");
}
</style><g class="hntgybcog"><path class="ii0-lxbim"/><path class="sa7b6bcxs"/></g>`,
		"fallback": "uix:statement-stamp-duty-paper",
	});
}

export default Component;
