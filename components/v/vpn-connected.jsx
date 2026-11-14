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
		"content": `<style>.a55srfq9g {
  d: path("M7.5 10.5a3 7.5 0 1 0 6 0a3 7.5 0 1 0-6 0m-4.5 0h15M14.75 18l2 2L21 15.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r8a9qcmsq {
  d: path("M11.154 17.971a7.5 7.5 0 1 1 6.817-6.817");
}
</style><g class="hntgybcog"><path class="r8a9qcmsq"/><path class="a55srfq9g"/></g>`,
		"fallback": "uix:vpn-connected",
	});
}

export default Component;
