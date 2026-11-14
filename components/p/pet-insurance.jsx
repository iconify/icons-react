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
		"content": `<style>.jojo-2blr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10a9 7.5 0 0 1 18 0q-3-1.5-6 0q-3-1.5-6 0q-3-1.5-6 0m4.5 3l2.5 2.25h4L16.5 13v4.5a4.5 4 0 0 1-9 0Zm2.75 4.25h.01m3.49 0h.01");
}
</style><path class="jojo-2blr"/>`,
		"fallback": "uix:pet-insurance",
	});
}

export default Component;
