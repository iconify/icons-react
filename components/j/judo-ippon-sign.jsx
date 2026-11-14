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
		"content": `<style>.dd2yl2afd {
  d: path("M8.5 2.5h7A3.5 3.5 0 0 1 19 6v7a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 13V6a3.5 3.5 0 0 1 3.5-3.5m3.5 14v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kou6_ccjr {
  fill: currentColor;
  d: path("M8.5 9.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}
</style><g class="hntgybcog"><path class="dd2yl2afd"/><path class="kou6_ccjr"/></g>`,
		"fallback": "uix:judo-ippon-sign",
	});
}

export default Component;
