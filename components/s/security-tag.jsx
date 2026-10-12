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

.j4f4djbzt {
  d: path("M6.25 14h4");
}

.o80478h4m {
  cx: 15.5px;
  cy: 14px;
  r: 1.75px;
}

.pap2ucgrx {
  width: 18.5px;
  height: 8.5px;
  x: 2.75px;
  y: 9.75px;
  rx: 4.25px;
}

.yu5lnvgmq {
  d: path("M15.5 3.75v6");
}
</style><g class="hntgybcog"><rect class="pap2ucgrx"/><path class="yu5lnvgmq"/><circle class="o80478h4m"/><path class="j4f4djbzt"/></g>`,
		"fallback": "iconoven:security-tag",
	});
}

export default Component;
