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
		"content": `<style>.h-al8aczv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7V9H19l-7 10.75L5 9h3.5Zm-6 17.25h19m-14.75-2.5l-2.5-1.5m13 1.5l2.5-1.5");
}
</style><path class="h-al8aczv"/>`,
		"fallback": "uix-sharp:sprawl",
	});
}

export default Component;
