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
		"content": `<style>.t_63a1lqc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16h19m-18 0v3.5m17-3.5v3.5M3.75 9a1.75 4.5 0 1 0 3.5 0a1.75 4.5 0 1 0-3.5 0m6.5 0a1.75 4.5 0 1 0 3.5 0a1.75 4.5 0 1 0-3.5 0m6.5 0a1.75 4.5 0 1 0 3.5 0a1.75 4.5 0 1 0-3.5 0M5.5 13.5V16m6.5-2.5V16m6.5-2.5V16");
}
</style><path class="t_63a1lqc"/>`,
		"fallback": "uix:optical-bench",
	});
}

export default Component;
