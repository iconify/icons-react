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
		"content": `<style>.a_tumxblg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5h19M3.25 13h4v6.5h-4ZM10 13h4v6.5h-4Zm6.75 0h4v6.5h-4ZM4 7.5h16m-2.25-2.25L20 7.5l-2.25 2.25");
}
</style><path class="a_tumxblg"/>`,
		"fallback": "uix-sharp:shelf-facing",
	});
}

export default Component;
