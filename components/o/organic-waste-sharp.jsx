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
		"content": `<style>.t-_uxsr4g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 7c2.75 1 5.75 1 8.5 0c.5 3-1.75 4.5-1.75 7s2.25 4 1.75 7c-2.75-1-5.75-1-8.5 0c-.5-3 1.75-4.5 1.75-7s-2.25-4-1.75-7Zm4.25.75l.75-4.25m1.75 2.25C15 4 16.25 3 18.5 3c-.5 1.75-1.75 2.75-4 2.75Z");
}
</style><path class="t-_uxsr4g"/>`,
		"fallback": "iconoven:organic-waste-sharp",
	});
}

export default Component;
