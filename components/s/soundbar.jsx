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
		"content": `<style>.c53pwwozk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 12.5h14a3 3 0 0 1 3 3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3a3 3 0 0 1 3-3m1 3h.01m3.99 0h.01m3.99 0h.01m3.99 0h.01M9.879 8.879a3 3 0 0 1 4.242 0M7.983 6.212a6.25 6.25 0 0 1 8.034 0");
}
</style><path class="c53pwwozk"/>`,
		"fallback": "uix:soundbar",
	});
}

export default Component;
