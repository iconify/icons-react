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

.la5qfrrxr {
  width: 18.5px;
  height: 13.5px;
  x: 2.75px;
  y: 5.25px;
  rx: 2.5px;
}

.wiwu8ob3f {
  d: path("m8.25 8.25l3 1V12c0 2-1.4 3.25-3 3.75c-1.6-.5-3-1.75-3-3.75V9.25Zm0 2.25v3M6.75 12h3m3.75-2h4.75m-4.75 3h3.25");
}
</style><g class="hntgybcog"><rect class="la5qfrrxr"/><path class="wiwu8ob3f"/></g>`,
		"fallback": "iconoven:insurance-card-check",
	});
}

export default Component;
