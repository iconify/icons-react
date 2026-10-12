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

.ithhcbw_s {
  d: path("M12.25 21.25h-5.5a2 2 0 0 1-2-2V4.75a2 2 0 0 1 2-2h9.5a2 2 0 0 1 2 2v7.5");
}

.y2rth1byv {
  d: path("M8.25 9.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m0 0h6.5M8.25 16h3m3.5 1.75l1.75 1.75l3.5-3.75");
}
</style><g class="hntgybcog"><path class="ithhcbw_s"/><path class="y2rth1byv"/></g>`,
		"fallback": "iconoven:passport-control",
	});
}

export default Component;
