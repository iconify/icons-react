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
		"content": `<style>.nkx1jbrzw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.25c1.75 0 2.75.75 5 .75s3.25-.75 5-.75c2 0 3.25 1.5 3.25 3.75s-1.25 3.75-2 5.5L17 20l-.49 3.269L15 20.25L12.75 15h-1.5L9 20.25l-1.51 3.019L7 20l-1.25-8c-.75-1.75-2-3.25-2-5.5C3.75 4.75 5 3.25 7 3.25ZM9.75 8.5l-1 6.75m5.5-6.75l1 6.75");
}
</style><path class="nkx1jbrzw"/>`,
		"fallback": "iconoven:tooth-root-sharp",
	});
}

export default Component;
