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
		"content": `<style>.wrd-rbqgo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 13H11a4 4 0 0 1 4 4a4 4 0 0 1-4 4H6.5a4 4 0 0 1-4-4a4 4 0 0 1 4-4m2.25 0V9c0-3.75 2.5-6 5.75-6s5 2.5 5 6m0 3c1.25 1.5 1.75 2.5 1.75 3.5a1.75 1.75 0 0 1-3.5 0c0-1 .5-2 1.75-3.5");
}
</style><path class="wrd-rbqgo"/>`,
		"fallback": "uix:pond-pump",
	});
}

export default Component;
