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
		"content": `<style>.pvh9bxb_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 3.5h8.5v17H13Zm-10.5-1h5V7h-5Zm0 7.25h5v4.5h-5Zm0 7.25h5v4.5h-5Zm7.75-5H13m-2.25-2.25L13 12l-2.25 2.25m5-6.25h3m-3 4h3m-3 4h2");
}
</style><path class="pvh9bxb_q"/>`,
		"fallback": "uix-sharp:meta-analysis",
	});
}

export default Component;
