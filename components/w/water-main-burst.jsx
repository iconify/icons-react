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
		"content": `<style>.h0mvvme9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5H10l-1.25 3l1.25 3H2.5Zm19 0H14l1.25 3l-1.25 3h7.5ZM12 11V3m-1.5 7.5Q8.5 6.5 5 5m8.5 5.5q2-4 5.5-5.5");
}
</style><path class="h0mvvme9i"/>`,
		"fallback": "uix-sharp:water-main-burst",
	});
}

export default Component;
