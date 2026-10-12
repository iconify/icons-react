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
		"content": `<style>.excex_8yl {
  d: path("M7.5 21.25h6M6.75 4.75h12a2.5 2.5 0 0 1 2.5 2.5v8M5.25 13h1.5m3 0h1.5m3 0h1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.la_3bbc_g {
  width: 15.5px;
  height: 10.5px;
  x: 2.75px;
  y: 7.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="la_3bbc_g"/><path class="excex_8yl"/></g>`,
		"fallback": "iconoven:tv-series",
	});
}

export default Component;
