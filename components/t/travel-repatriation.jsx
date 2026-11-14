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
		"content": `<style>.de6o20bkf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5H6l-1.75-4h2.5l2.75 4h3.25a1 1 0 0 1 0 2H9.5l-2.75 4h-2.5L6 9.5H2.5Zm9.579 6.479l3.25-2.925a1.75 1.75 0 0 1 2.342 0l3.25 2.925a1.75 1.75 0 0 1 .579 1.3v4.471a1.75 1.75 0 0 1-1.75 1.75h-6.5a1.75 1.75 0 0 1-1.75-1.75v-4.471a1.75 1.75 0 0 1 .579-1.3");
}
</style><path class="de6o20bkf"/>`,
		"fallback": "uix:travel-repatriation",
	});
}

export default Component;
