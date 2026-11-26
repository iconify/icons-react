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
		"content": `<style>.u4o9o21wf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3H21M3 9H18C19.6569 9 21 10.3431 21 12C21 13.6569 19.6569 15 18 15H12M14 13L12 15L14 17M3 15H8M3 21H15");
}
</style><path class="u4o9o21wf"/>`,
		"fallback": "keyline-icons:text-wrap-fill",
	});
}

export default Component;
