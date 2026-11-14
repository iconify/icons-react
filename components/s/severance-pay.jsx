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
		"content": `<style>.rvvar1bua {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h18v9.5H3Zm10-3.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3-1v2M8 12V6.5M8 9c0-2-1.5-3.5-3.5-3.5C4.5 7.5 6 9 8 9Zm0-1.5c0-2.25 1.5-3.75 3.5-3.75c0 2-1.5 3.75-3.5 3.75ZM3 12L2 9.5M21 12l1-2.5");
}
</style><path class="rvvar1bua"/>`,
		"fallback": "uix-sharp:severance-pay",
	});
}

export default Component;
