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
		"content": `<style>.pyc9bkbqw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3.5h15V8h-15ZM12 8v13m-1.5-8h3m-3 3h3m-3 3h3");
}
</style><path class="pyc9bkbqw"/>`,
		"fallback": "uix-sharp:safety-razor",
	});
}

export default Component;
