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
		"content": `<style>.n9w164rna {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 15.25a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 1 0-10.5 0ZM8.5 6L10 3.5h4L15.5 6L12 9Z");
}
</style><path class="n9w164rna"/>`,
		"fallback": "uix-sharp:jewellery-insurance",
	});
}

export default Component;
