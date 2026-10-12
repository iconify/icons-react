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
		"content": `<style>.f0rcwubsl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3h6v12h-6zm9 0h6v12h-6zm-3 6h3m-6 9v3m9-3v3");
}
</style><path class="f0rcwubsl"/>`,
		"fallback": "iconoven:jetpack-space-sharp",
	});
}

export default Component;
