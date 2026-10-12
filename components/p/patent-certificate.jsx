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
		"content": `<style>.h8uchz7yg {
  d: path("M7 6.5h10m-10 3h6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.irf-rnz5c {
  cx: 16px;
  cy: 16.5px;
  r: 3px;
}

.jwzz1xbwf {
  d: path("m14.5 19.1l-.75 2.15m3.75-2.15l.75 2.15");
}

.ozwpxuejn {
  width: 16px;
  height: 13px;
  x: 4px;
  y: 3px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="ozwpxuejn"/><path class="h8uchz7yg"/><circle class="irf-rnz5c"/><path class="jwzz1xbwf"/></g>`,
		"fallback": "iconoven:patent-certificate",
	});
}

export default Component;
