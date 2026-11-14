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
		"content": `<style>.i00r9ybpk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 21V3.25m-2 2l2-2l2 2M11 3h9v15.5h-9Zm0 7.5h9m-6.75 4h.01m4.49 0h.01M11 5L9.5 6.5M20 5l1.5 1.5m-8.5 12V21m5-2.5V21");
}
</style><path class="i00r9ybpk"/>`,
		"fallback": "uix-sharp:lane-arrow-bus",
	});
}

export default Component;
