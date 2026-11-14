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

.icukktl_a {
  d: path("M3 12.25a2 2 0 0 1 4 0v2.25h10v-2.25a2 2 0 0 1 4 0v7.25H3Zm9 2.25v5");
}

.t1imu0bho {
  d: path("M5 10.25V7a2.5 2.5 0 0 1 2.5-2.5h9A2.5 2.5 0 0 1 19 7v3.25");
}
</style><g class="hntgybcog"><path class="t1imu0bho"/><path class="icukktl_a"/></g>`,
		"fallback": "uix:sofa",
	});
}

export default Component;
