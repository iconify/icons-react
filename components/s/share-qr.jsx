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
		"content": `<style>.m2x7udbyy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h6v6h-6Zm11 0h6v6h-6Zm-11 11h6v6h-6Zm3-8h.01m10.99 0h.01M6.5 17.5h.01m7.99 3l6-6m-4 0h4v4");
}
</style><path class="m2x7udbyy"/>`,
		"fallback": "uix-sharp:share-qr",
	});
}

export default Component;
