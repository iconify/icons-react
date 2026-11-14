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
		"content": `<style>.rdp__bb6c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0M6.5 20v-1c0-3 2.5-5 5.5-5s5.5 2 5.5 5v1M2.25 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m15.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2 18.5v-1c0-1.75.75-3 2.25-3.25M22 18.5v-1c0-1.75-.75-3-2.25-3.25");
}
</style><path class="rdp__bb6c"/>`,
		"fallback": "uix:repo-contributors",
	});
}

export default Component;
