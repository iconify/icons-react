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
		"content": `<style>.gm6a0-kmy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 5.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM8.5 11l1 3.5h6m-12 6H18a2.5 2.5 0 0 0 2.5-2.5M5 17.5h12m-9.5 0v3m7-3v3");
}
</style><path class="gm6a0-kmy"/>`,
		"fallback": "uix-sharp:pin-sledging",
	});
}

export default Component;
