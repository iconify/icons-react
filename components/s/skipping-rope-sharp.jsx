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
		"content": `<style>.kp0rgkbrs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.75h3v7.5h-3zm14 0h3v7.5h-3zM5 10.25v3a7 7 0 0 0 14 0v-3");
}
</style><path class="kp0rgkbrs"/>`,
		"fallback": "iconoven:skipping-rope-sharp",
	});
}

export default Component;
