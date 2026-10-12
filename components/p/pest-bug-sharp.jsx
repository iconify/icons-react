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
		"content": `<style>.fleypgb_d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 4.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-3.5 10a5.25 6 0 1 0 10.5 0a5.25 6 0 1 0-10.5 0Zm5.25-6v12M7.74 11L4.5 9.25m2.25 5.25h-3.5M7.74 18L4.5 19.75M16.26 11l3.24-1.75m-2.25 5.25h3.5M16.26 18l3.24 1.75");
}
</style><path class="fleypgb_d"/>`,
		"fallback": "iconoven:pest-bug-sharp",
	});
}

export default Component;
