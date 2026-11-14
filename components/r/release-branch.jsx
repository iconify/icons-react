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
		"content": `<style>.tm8tajbht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M5 7v14.5M5 9c0 2.846 1.652 5.526 5.226 6.429M14.75 13h3.025a1.75 1.75 0 0 1 1.238.513l1.75 1.75a1.75 1.75 0 0 1 0 2.474l-3.026 3.026a1.75 1.75 0 0 1-2.474 0l-1.75-1.75A1.75 1.75 0 0 1 13 17.775V14.75A1.75 1.75 0 0 1 14.75 13m1 2.75h.01");
}
</style><path class="tm8tajbht"/>`,
		"fallback": "uix:release-branch",
	});
}

export default Component;
