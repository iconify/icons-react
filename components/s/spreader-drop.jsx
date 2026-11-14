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
		"content": `<style>.otv039bcx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h13L13 11H6ZM13 11l4.5 6.5m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-7-2.5h.01m3.99 0h.01M9.5 19.5h.01");
}
</style><path class="otv039bcx"/>`,
		"fallback": "uix-sharp:spreader-drop",
	});
}

export default Component;
