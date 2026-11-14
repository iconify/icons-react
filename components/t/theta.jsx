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
		"content": `<style>.atrw0acwj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12a5.5 9 0 1 0 11 0a5.5 9 0 1 0-11 0ZM6 12h12");
}
</style><path class="atrw0acwj"/>`,
		"fallback": "uix-sharp:theta",
	});
}

export default Component;
