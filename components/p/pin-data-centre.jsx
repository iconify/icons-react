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
		"content": `<style>.u4c385bcn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h18v7H3Zm0 10h18v7H3ZM7 7h.01M11 7h6M7 17h.01M11 17h6");
}
</style><path class="u4c385bcn"/>`,
		"fallback": "uix-sharp:pin-data-centre",
	});
}

export default Component;
