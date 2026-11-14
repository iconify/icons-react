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
		"content": `<style>.xuwr9nfzk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6A2.5 2.5 0 0 1 17.5 5v3a2.5 2.5 0 0 1-2.5 2.5L13 14h-2l-2-3.5A2.5 2.5 0 0 1 6.5 8V5A2.5 2.5 0 0 1 9 2.5Zm3 14.25l1.5 2a1.75 1.75 0 1 1-3 0ZM9.5 6.5h5");
}
</style><path class="xuwr9nfzk"/>`,
		"fallback": "uix-sharp:pet-water-bottle",
	});
}

export default Component;
