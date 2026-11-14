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
		"content": `<style>.dx7x9gbni {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5h19l-2 8h-15ZM6.25 8h3.5A2.25 2.25 0 0 1 12 10.25a2.25 2.25 0 0 1-2.25 2.25h-3.5A2.25 2.25 0 0 1 4 10.25A2.25 2.25 0 0 1 6.25 8m8 0h3.5A2.25 2.25 0 0 1 20 10.25a2.25 2.25 0 0 1-2.25 2.25h-3.5A2.25 2.25 0 0 1 12 10.25A2.25 2.25 0 0 1 14.25 8m-4-4.5h3.5A2.25 2.25 0 0 1 16 5.75A2.25 2.25 0 0 1 13.75 8h-3.5A2.25 2.25 0 0 1 8 5.75a2.25 2.25 0 0 1 2.25-2.25");
}
</style><path class="dx7x9gbni"/>`,
		"fallback": "uix:sandbag-bin",
	});
}

export default Component;
