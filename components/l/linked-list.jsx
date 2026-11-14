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
		"content": `<style>.y4pit49pd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5h4v7h-4Zm7.5 0h4v7h-4Zm7.5 0h4v7h-4ZM6.5 12H10m-1.25-1.25L10 12l-1.25 1.25M14 12h3.5m-1.25-1.25L17.5 12l-1.25 1.25");
}
</style><path class="y4pit49pd"/>`,
		"fallback": "uix-sharp:linked-list",
	});
}

export default Component;
