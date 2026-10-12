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
		"content": `<style>.h_5cn_cef {
  d: path("M9.75 8.5h11.5M15.5 2.75c-2 2-2 9.5 0 11.5c2-2 2-9.5 0-11.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.khkxatp1j {
  cx: 15.5px;
  cy: 8.5px;
  r: 5.75px;
}

.v7_sv6f-i {
  d: path("M10.25 17.5h11m-2.25 0v2.75m-2.75-2.75v2");
}

.y5ms0ksxq {
  cx: 6.5px;
  cy: 17.5px;
  r: 3.75px;
}
</style><g class="hntgybcog"><circle class="khkxatp1j"/><path class="h_5cn_cef"/><circle class="y5ms0ksxq"/><path class="v7_sv6f-i"/></g>`,
		"fallback": "iconoven:public-key",
	});
}

export default Component;
