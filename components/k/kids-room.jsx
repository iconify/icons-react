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

.yl8srib2z {
  d: path("M4.5 13.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.ys3qygbcz {
  d: path("M3 6.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m12.5 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m-6.25 5.25h.01m5.49 0h.01M9 16.25a3 2.25 0 1 0 6 0a3 2.25 0 1 0-6 0m3-.75h.01");
}
</style><g class="hntgybcog"><path class="yl8srib2z"/><path class="ys3qygbcz"/></g>`,
		"fallback": "uix:kids-room",
	});
}

export default Component;
