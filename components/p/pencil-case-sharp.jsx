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
		"content": `<style>.oytcw4bcx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.25h18.5v11H2.75zm3.5-.75V5.75l.34-.67l.82-1.66l.34-.67l.34.67l.82 1.66l.34.67v3.5h-3zm-3.5 4.75h18.5m-5.5 0v3m-9.5-10.5h3");
}
</style><path class="oytcw4bcx"/>`,
		"fallback": "iconoven:pencil-case-sharp",
	});
}

export default Component;
