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
		"content": `<style>.mo8gxxlqw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7a3.75 3.75 0 1 0 7.5 0A3.75 3.75 0 1 0 3 7Zm10.5 0A3.75 3.75 0 1 0 21 7a3.75 3.75 0 1 0-7.5 0ZM6 17a6 3.5 0 1 0 12 0a6 3.5 0 1 0-12 0Zm5.094-3.381l1.812 6.762");
}
</style><path class="mo8gxxlqw"/>`,
		"fallback": "uix-sharp:pills-scattered",
	});
}

export default Component;
