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
		"content": `<style>.i3c6l-b9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 9.25L7.25 3.5m6.25 1.25h4v4.5h-4zM2.75 9.25h18.5v12H2.75zm0 3.5h18.5");
}
</style><path class="i3c6l-b9i"/>`,
		"fallback": "iconoven:toiletries-sharp",
	});
}

export default Component;
