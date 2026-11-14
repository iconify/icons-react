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

.r8a9qcmsq {
  d: path("M11.154 17.971a7.5 7.5 0 1 1 6.817-6.817");
}

.zb3b6jfcg {
  d: path("M7.5 10.5a3 7.5 0 1 0 6 0a3 7.5 0 1 0-6 0m-4.5 0h15M16.75 17h2.5A1.75 1.75 0 0 1 21 18.75v1a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.75v-1A1.75 1.75 0 0 1 16.75 17m-.5 0v-1a1.75 1.75 0 0 1 3.5 0v1");
}
</style><g class="hntgybcog"><path class="r8a9qcmsq"/><path class="zb3b6jfcg"/></g>`,
		"fallback": "uix:vpn",
	});
}

export default Component;
