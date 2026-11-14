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
		"content": `<style>.mgt4t9h2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7c5-2 12-2 17 0l-2 9.5c-4.5-1-8.5-1-13 0Zm8.5 6v7.5m-4-9h.01M10 9.75h.01m3.99 0h.01M16 11.5h.01");
}
</style><path class="mgt4t9h2b"/>`,
		"fallback": "uix:washer-fluid-low",
	});
}

export default Component;
