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

.xi7_-t_yd {
  d: path("M7.5 11a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m2.5 7h11.5m0-2v4");
}

.yf8hnl-ix {
  d: path("M3 11a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}
</style><g class="hntgybcog"><path class="yf8hnl-ix"/><path class="xi7_-t_yd"/></g>`,
		"fallback": "uix:waist-size",
	});
}

export default Component;
