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
		"content": `<style>.f4dfu6tfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 14V5.5a2 2 0 0 1 4 0V14a4 4 0 1 1-4 0Zm7-7.5h2m-2 3h2m-2 3h2");
}
</style><path class="f4dfu6tfv"/>`,
		"fallback": "uix-sharp:thermometer",
	});
}

export default Component;
