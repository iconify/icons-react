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
		"content": `<style>.fyuju2bid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 14.75h18.5v6.5H2.75zm9.25 0v6.5m-4.75-13h9.5v6.5h-9.5z");
}
</style><path class="fyuju2bid"/>`,
		"fallback": "iconoven:masonry-sharp",
	});
}

export default Component;
