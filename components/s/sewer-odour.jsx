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
		"content": `<style>.e8bm0zgjk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 16a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m3-1.5h5m-5 3h5m-7-9.75q-1.25-1.25 0-2.5t0-2.5m4.5 5q-1.25-1.25 0-2.5t0-2.5m4.5 5q-1.25-1.25 0-2.5t0-2.5");
}
</style><path class="e8bm0zgjk"/>`,
		"fallback": "uix:sewer-odour",
	});
}

export default Component;
