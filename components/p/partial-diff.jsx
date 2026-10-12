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
		"content": `<style>.c1o3tzj3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 5.5c1.5-1.25 3-1.75 4.5-1.75c3.25 0 5.5 2.75 5.5 7.5c0 5.75-2.75 9-6.25 9c-2.75 0-4.75-2-4.75-4.5s2-4.5 4.75-4.5c2.25 0 4.25 1.25 5.75 3.5");
}
</style><path class="c1o3tzj3s"/>`,
		"fallback": "iconoven:partial-diff",
	});
}

export default Component;
