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
		"content": `<style>.j5xybdj5d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 4.25h6.5v3h-6.5zm6.5 1.5h3m-14.5 4h16.5v11.5H3.75zM9 15.5h6");
}
</style><path class="j5xybdj5d"/>`,
		"fallback": "iconoven:perfume-sharp",
	});
}

export default Component;
