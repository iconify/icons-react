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
		"content": `<style>.y83kq8qhn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 6h14l-4 11H9Zm7-3.5V6m0 11v4.5m-6-2h12M6 8.75h3.5m3.5 5.5h3");
}
</style><path class="y83kq8qhn"/>`,
		"fallback": "uix-sharp:kebab-shop",
	});
}

export default Component;
