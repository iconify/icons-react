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

.leit0qrss {
  d: path("M8 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-2.5 9.5c0-3 2.25-4.5 5-4.5s5 1.5 5 4.5");
}

.lv-rdrbnr {
  d: path("M7 2.5h7A3.5 3.5 0 0 1 17.5 6v12a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18V6A3.5 3.5 0 0 1 7 2.5m13.5 3v13m-14-12h8");
}
</style><g class="hntgybcog"><path class="lv-rdrbnr"/><path class="leit0qrss"/></g>`,
		"fallback": "uix:magazine-cover",
	});
}

export default Component;
