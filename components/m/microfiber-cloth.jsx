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

.qfv0rmi_j {
  d: path("M21 13q-1 5.5-8 8");
}

.r2w72tz-y {
  d: path("M5 3h14a2 2 0 0 1 2 2v8q-5 0-8 8H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2");
}
</style><g class="hntgybcog"><path class="r2w72tz-y"/><path class="qfv0rmi_j"/></g>`,
		"fallback": "uix:microfiber-cloth",
	});
}

export default Component;
