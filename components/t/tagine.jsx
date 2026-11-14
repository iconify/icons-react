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
		"content": `<style>.gms9bubcr {
  d: path("M3 15h18q0 4.5-9 4.5T3 15m1.5 0C8 13 10 8 11 4.5h2C14 8 16 13 19.5 15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ytp_h-bdx {
  d: path("M10.75 3.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="gms9bubcr"/><path class="ytp_h-bdx"/></g>`,
		"fallback": "uix:tagine",
	});
}

export default Component;
