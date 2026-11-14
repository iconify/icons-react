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
		"content": `<style>.q100fglzv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6.5h9.5l2.75 2l-2.75 2H9Zm6 6H5.5l-2.75 2l2.75 2H15Zm-3-10v4M9.75 4.75L12 2.5l2.25 2.25M12 10.5v2m0 4v5");
}
</style><path class="q100fglzv"/>`,
		"fallback": "uix-sharp:scenario",
	});
}

export default Component;
