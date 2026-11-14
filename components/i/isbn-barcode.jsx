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
		"content": `<style>.s5ue2ob_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18v16H3Zm4 4v8m3-8v8m2.5-8v8M15 8v8m2.5-8v8");
}
</style><path class="s5ue2ob_q"/>`,
		"fallback": "uix-sharp:isbn-barcode",
	});
}

export default Component;
