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
		"content": `<style>.okrpi6b3q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 8.75a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 1 1 0-10.5m3.71 1.54L20 4m-5.25 0H20v5.25");
}
</style><path class="okrpi6b3q"/>`,
		"fallback": "iconoven:male-sign-sharp",
	});
}

export default Component;
