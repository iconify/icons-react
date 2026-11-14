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
		"content": `<style>.gh4nqbc7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8h13m-3.5-3.5L17 8l-3.5 3.5M20 16H7m3.5-3.5L7 16l3.5 3.5");
}
</style><path class="gh4nqbc7q"/>`,
		"fallback": "uix-sharp:treasury-swap",
	});
}

export default Component;
