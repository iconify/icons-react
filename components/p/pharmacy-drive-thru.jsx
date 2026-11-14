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

.wdzw1bb0e {
  d: path("M3 9a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0M6.5 20.5v-5h4v5m3.5-1v-2.25l1.75-2.5h4l2 2.5v2.25Zm2 2h.01m3.74 0h.01");
}

.wpe8u9bbt {
  d: path("m3 9l1.5-5h15L21 9m-1.5 2v.9m-15-.9v9.5h6.9");
}
</style><g class="hntgybcog"><path class="wpe8u9bbt"/><path class="wdzw1bb0e"/></g>`,
		"fallback": "uix:pharmacy-drive-thru",
	});
}

export default Component;
