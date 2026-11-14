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
		"content": `<style>.zb1e3ccud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21V3.5M20 21V3.5M4 9h16M4 15h16M4 20.5h16M6.5 5h4v4h-4Zm6.5 6h5v4h-5Z");
}
</style><path class="zb1e3ccud"/>`,
		"fallback": "uix-sharp:warehouse-shelf",
	});
}

export default Component;
