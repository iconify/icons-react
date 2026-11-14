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
		"content": `<style>.utq5sac0e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 8a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0M3.5 21.5c0-4 2.5-6.25 6-6.25s6 2.25 6 6.25m-.75-17.25a6.5 6.5 0 0 1 0 7.5M17.25 3a9.25 9.25 0 0 1 0 10M20 2.5a12 12 0 0 1 0 11");
}
</style><path class="utq5sac0e"/>`,
		"fallback": "uix:speaker-id",
	});
}

export default Component;
