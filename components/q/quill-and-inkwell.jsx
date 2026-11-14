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
		"content": `<style>.ujkws6bpc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.5V17a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4.5Zm5-6.5c-1-4 2.5-9 9.5-11.5c-.5 5.5-4 9.5-8.5 10M10 15L6.5 8.5");
}
</style><path class="ujkws6bpc"/>`,
		"fallback": "uix-sharp:quill-and-inkwell",
	});
}

export default Component;
