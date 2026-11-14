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
		"content": `<style>.b1pi0bcwo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0ZM7 13h.01M12 13h.01M7 18l5-1m4.5-12.5a2.25 2.25 0 1 1 3 2c-.75.5-.75 1-.75 1.75m0 2.75h.01");
}
</style><path class="b1pi0bcwo"/>`,
		"fallback": "uix-sharp:mood-confused",
	});
}

export default Component;
