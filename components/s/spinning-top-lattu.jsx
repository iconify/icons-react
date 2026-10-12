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
		"content": `<style>.ehiso1efj {
  d: path("M6.25 11.5c3.75 1.25 7.75 1.25 11.5 0m-9.25 3c2.4.75 4.6.75 7 0m-3.5 5v1.75");
}

.h5yl9kbar {
  width: 2.5px;
  height: 3.25px;
  x: 10.75px;
  y: 2.75px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u30x4kksv {
  d: path("M4.75 10C4.75 7.75 8 6.25 12 6.25s7.25 1.5 7.25 3.75c0 3.5-3.5 7-7.25 9.5c-3.75-2.5-7.25-6-7.25-9.5");
}
</style><g class="hntgybcog"><rect class="h5yl9kbar"/><path class="u30x4kksv"/><path class="ehiso1efj"/></g>`,
		"fallback": "iconoven:spinning-top-lattu",
	});
}

export default Component;
