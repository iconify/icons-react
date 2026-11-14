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
		"content": `<style>.dekqqclrv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 4.5h6m-3 0V9m-7 8c0-4.5 3-8 7-8s7 3.5 7 8Zm4.5 0a2.5 2.5 0 0 0 5 0");
}
</style><path class="dekqqclrv"/>`,
		"fallback": "uix-sharp:light-fixture",
	});
}

export default Component;
