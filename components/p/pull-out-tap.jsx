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

.iqwvr_bhl {
  d: path("M18 10.5za1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5m-10 3l-3-2");
}

.zis83bc9d {
  d: path("M4.5 21h9M8 21V8a5 5 0 0 1 10 0v2.5");
}
</style><g class="hntgybcog"><path class="zis83bc9d"/><path class="iqwvr_bhl"/></g>`,
		"fallback": "uix:pull-out-tap",
	});
}

export default Component;
