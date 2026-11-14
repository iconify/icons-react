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

.lyrmecc_u {
  d: path("M6 12za.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75A.75.75 0 0 1 6 12m4 0za.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75A.75.75 0 0 1 10 12m4 0za.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75A.75.75 0 0 1 14 12m4 0za.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75A.75.75 0 0 1 18 12");
}

.zyn3ubc_o {
  d: path("M6 7h12a3.5 3.5 0 0 1 3.5 3.5v3A3.5 3.5 0 0 1 18 17H6a3.5 3.5 0 0 1-3.5-3.5v-3A3.5 3.5 0 0 1 6 7");
}
</style><g class="hntgybcog"><path class="zyn3ubc_o"/><path class="lyrmecc_u"/></g>`,
		"fallback": "uix:network-hub",
	});
}

export default Component;
