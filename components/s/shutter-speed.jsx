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

.nt0xbvyuj {
  d: path("M14 8v4l2.5 1.75m-13.75-5H4.5M2.75 12H4m-1.25 3.25H4.5");
}

.xqztkowql {
  cx: 14px;
  cy: 12px;
  r: 7.25px;
}
</style><g class="hntgybcog"><circle class="xqztkowql"/><path class="nt0xbvyuj"/></g>`,
		"fallback": "iconoven:shutter-speed",
	});
}

export default Component;
