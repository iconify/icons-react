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
		"content": `<style>.c8w_5bval {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 7.5H18m-5.75 0v12.25M3.75 4.5h12.5m-7 0v13.75");
}
</style><path class="c8w_5bval"/>`,
		"fallback": "iconoven:text-shadow-sharp",
	});
}

export default Component;
