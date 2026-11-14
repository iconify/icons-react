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
		"content": `<style>.j8nt2y6ps {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 15.75a5.75 5.75 0 1 0 11.5 0a5.75 5.75 0 1 0-11.5 0M10.121 2.5h3.758a1.5 1.5 0 0 1 1.06.439l1.389 1.389a1.5 1.5 0 0 1-.111 2.222L12.95 9.223a1.5 1.5 0 0 1-1.9 0L7.783 6.55a1.5 1.5 0 0 1-.111-2.222l1.389-1.389a1.5 1.5 0 0 1 1.06-.439M6.5 5.5h11");
}
</style><path class="j8nt2y6ps"/>`,
		"fallback": "uix:ring",
	});
}

export default Component;
