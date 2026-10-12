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
		"content": `<style>.yozrxy_ri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.75h16.75v5h-3l1.25 8.5h-4l-1.25-8.5H7.5v3.75H3.25V4.75zM3.75 16.5h3m-1.5 0v4.75");
}
</style><path class="yozrxy_ri"/>`,
		"fallback": "iconoven:nail-gun-sharp",
	});
}

export default Component;
