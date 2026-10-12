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

.ppf5_cb-m {
  d: path("M5 2.75h14q1.25 0 1.25 1.25v15.5q0 1.25-1.05.58l-.65-.41q-1.05-.67-2.1 0l-.65.41q-1.05.67-2.1 0l-.65-.41q-1.05-.67-2.1 0l-.65.41q-1.05.67-2.1 0l-.65-.41q-1.05-.67-2.1 0l-.65.41q-1.05.67-1.05-.58V4q0-1.25 1.25-1.25");
}

.sue4ftoht {
  d: path("M9.75 7.25L7.5 9.75l2.25 2.5m4.5-5l2.25 2.5l-2.25 2.5");
}
</style><g class="hntgybcog"><path class="ppf5_cb-m"/><path class="sue4ftoht"/></g>`,
		"fallback": "iconoven:snippet",
	});
}

export default Component;
