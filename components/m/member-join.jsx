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
		"content": `<style>.ge1rqktcm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM3.5 21c0-4 3-6.5 7-6.5c1.28 0 2.458.256 3.468.735M18 15v6m-3-3h6");
}
</style><path class="ge1rqktcm"/>`,
		"fallback": "uix-sharp:member-join",
	});
}

export default Component;
