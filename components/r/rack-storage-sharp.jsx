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
		"content": `<style>.ur673e81r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.75v18.5m11-18.5v18.5m6-18.5v18.5m-17-9.5h17m-17.75 9.5h18.5m-6.75-17l6 5.25m0 4.5l-6 5.25M6 5h6v6.75H6zm3 0v2m-3 7.5h6v6.75H6zm3 0v2");
}
</style><path class="ur673e81r"/>`,
		"fallback": "iconoven:rack-storage-sharp",
	});
}

export default Component;
