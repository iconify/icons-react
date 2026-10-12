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
		"content": `<style>.pembtm_7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.75h5v4.5h-5zm5 2.25h3m2.5-5.5h-2.5v11h2.5m0-13.25h8v4.5h-8zm0 11h8v4.5h-8z");
}
</style><path class="pembtm_7q"/>`,
		"fallback": "iconoven:tree-diagram-sharp",
	});
}

export default Component;
