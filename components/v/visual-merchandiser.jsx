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
		"content": `<style>.cz3ixabdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 7.25a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0ZM3.5 21.5c0-4.25 3.75-6.75 8.5-6.75q1.019 0 1.964.151M18 16.25v-.75a1.25 1.25 0 1 0-1.25-1.25m1.25 2l3.25 3q.5 1.25-.5 1.25M18 16.25l-3.25 3q-.5 1.25.5 1.25m0 0h5.5");
}
</style><path class="cz3ixabdu"/>`,
		"fallback": "uix-sharp:visual-merchandiser",
	});
}

export default Component;
