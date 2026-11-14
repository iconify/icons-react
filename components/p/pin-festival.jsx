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
		"content": `<style>.ll3yz4qep {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21L7.5 9l7.5 7.5Zm8-18l.75 3.5M15 9l4-4m-1.5 7.25l3.5-.75M18 3h.01M21 7.5h.01");
}
</style><path class="ll3yz4qep"/>`,
		"fallback": "uix-sharp:pin-festival",
	});
}

export default Component;
