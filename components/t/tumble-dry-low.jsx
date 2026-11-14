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
		"content": `<style>.bg0dvpb2v {
  d: path("M6.25 12a5.75 5.75 0 1 0 11.5 0a5.75 5.75 0 1 0-11.5 0M12 12h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wst7c_x3t {
  d: path("M7.875 3.5h8.25A4.375 4.375 0 0 1 20.5 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375h-8.25A4.375 4.375 0 0 1 3.5 16.125v-8.25A4.375 4.375 0 0 1 7.875 3.5");
}
</style><g class="hntgybcog"><path class="wst7c_x3t"/><path class="bg0dvpb2v"/></g>`,
		"fallback": "uix:tumble-dry-low",
	});
}

export default Component;
