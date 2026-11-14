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
		"content": `<style>.l9axnjbhn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.375 3h5.25A4.375 4.375 0 0 1 19 7.375v9.25A4.375 4.375 0 0 1 14.625 21h-5.25A4.375 4.375 0 0 1 5 16.625v-9.25A4.375 4.375 0 0 1 9.375 3M9 8h.01M12 8h.01M15 8h.01M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01");
}
</style><path class="l9axnjbhn"/>`,
		"fallback": "uix:safe-keypad",
	});
}

export default Component;
