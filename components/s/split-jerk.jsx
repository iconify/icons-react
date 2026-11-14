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

.oloj4_b8s {
  d: path("M10.25 8.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.onhvkmavh {
  d: path("M2.5 4h19M4 2v4m16-4v4M6.5 4l2 8.5h7l2-8.5M12 12.5V16m-7.5 5.5l3-4L12 16l7.5 5.5");
}
</style><g class="hntgybcog"><path class="onhvkmavh"/><path class="oloj4_b8s"/></g>`,
		"fallback": "uix:split-jerk",
	});
}

export default Component;
