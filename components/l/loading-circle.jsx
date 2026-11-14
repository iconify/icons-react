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
		"content": `<style>.xhz_xhbxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 3.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM17 6a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm2.5 6a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM17 18a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm-6 2.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM5 18a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm-2.5-6a1 1 0 1 0 2 0a1 1 0 1 0-2 0ZM5 6a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><path class="xhz_xhbxh"/>`,
		"fallback": "uix-sharp:loading-circle",
	});
}

export default Component;
