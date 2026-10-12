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
		"content": `<style>.cc56qhb2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.5 12.25l-7-8.5m-4.75 5.5l1.75 3H15q4.5 0 6.25-3q-.75 9.5-4.25 9.5H7q-3.5 0-4.25-9.5ZM6.5 15.5h11");
}
</style><path class="cc56qhb2m"/>`,
		"fallback": "iconoven:lifeboat-sharp",
	});
}

export default Component;
