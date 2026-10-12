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
		"content": `<style>.haladobdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.75v16.5M8.75 3h12.5v7.5H8.75zm-6 18.25C5.25 19.5 8.25 19 12 19s6.75.5 9.25 2.25");
}
</style><path class="haladobdk"/>`,
		"fallback": "iconoven:lunar-flag-sharp",
	});
}

export default Component;
