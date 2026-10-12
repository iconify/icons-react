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
		"content": `<style>.epunx9b5p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 4.75h14.5v16.5H4.75zM8 11h8m-8 3.5h8M8 18h5M8 2.75v4m4-4v4m4-4v4");
}
</style><path class="epunx9b5p"/>`,
		"fallback": "iconoven:notepad-sharp",
	});
}

export default Component;
