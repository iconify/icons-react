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
		"content": `<style>.b7jehbcvj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21V7m0 1.5C12 5.75 10.25 4 7.75 4c0 2.75 1.75 4.5 4.25 4.5M12 7c0-2.75 1.75-4.5 4.25-4.5C16.25 5.25 14.5 7 12 7m0 9.5c-3 0-7-1-8-4a2 2 0 0 1 4 0m4 1c3 0 7 1 8 4a2 2 0 0 1-4 0");
}
</style><path class="b7jehbcvj"/>`,
		"fallback": "uix:invasive-plant",
	});
}

export default Component;
