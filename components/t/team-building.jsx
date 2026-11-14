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
		"content": `<style>.llbaujbiz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12.5h9v9H3Zm9 0h9v9h-9Zm-4.5-9h9v9h-9Zm4.5 9v9m-4.5-9h9");
}
</style><path class="llbaujbiz"/>`,
		"fallback": "uix-sharp:team-building",
	});
}

export default Component;
