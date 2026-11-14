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
		"content": `<style>.ykix99ktf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 6L12 2.5L16.5 6ZM9 6h6v5H9Zm3 5v6.5m-8 2a8 2 0 1 0 16 0a8 2 0 1 0-16 0Z");
}
</style><path class="ykix99ktf"/>`,
		"fallback": "uix-sharp:path-light",
	});
}

export default Component;
