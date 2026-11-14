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
		"content": `<style>.fbfddo15r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11h12v10.5h-12ZM6 11l1.5-2.5h4L13 11Zm5.5-2.5l9-5.5");
}
</style><path class="fbfddo15r"/>`,
		"fallback": "uix-sharp:oil-can",
	});
}

export default Component;
