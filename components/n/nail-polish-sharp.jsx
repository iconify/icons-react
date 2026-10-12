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
		"content": `<style>.uprol_15o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.75h5v6.5h-5zm-3.25 9h11.5v9.5H6.25zm3 4.75h5.5");
}
</style><path class="uprol_15o"/>`,
		"fallback": "iconoven:nail-polish-sharp",
	});
}

export default Component;
