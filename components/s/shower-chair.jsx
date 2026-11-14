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
		"content": `<style>.h2kv-ub7u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 6.5h12.5A2.75 2.75 0 0 1 21 9.25A2.75 2.75 0 0 1 18.25 12H5.75A2.75 2.75 0 0 1 3 9.25A2.75 2.75 0 0 1 5.75 6.5M7.5 9.25h.01m4.49 0h.01m4.49 0h.01M5 12l-1.5 9.5m6-9.5L9 21.5m5.5-9.5l.5 9.5m4-9.5l1.5 9.5");
}
</style><path class="h2kv-ub7u"/>`,
		"fallback": "uix:shower-chair",
	});
}

export default Component;
