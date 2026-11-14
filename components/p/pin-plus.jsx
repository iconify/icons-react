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
		"content": `<style>.mc-t7abnq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3.5h4V8l3 4.5h-10l3-4.5Zm2 9V20m8.5-5v6m-3-3h6");
}
</style><path class="mc-t7abnq"/>`,
		"fallback": "uix-sharp:pin-plus",
	});
}

export default Component;
