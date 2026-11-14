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
		"content": `<style>.o7wr8vb5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 3.5V20h1c4.75 0 8-3.25 8-8m-13-.5l8.5-3m-8.5 7l8.5-3");
}
</style><path class="o7wr8vb5y"/>`,
		"fallback": "uix-sharp:lira-sign",
	});
}

export default Component;
