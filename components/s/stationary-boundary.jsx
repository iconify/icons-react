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
		"content": `<style>.pbsy3bb7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16a9.5 4.5 0 1 0 19 0a9.5 4.5 0 1 0-19 0Zm6-12h7v3.5h-7Zm1 3.5v8m5-8v8");
}
</style><path class="pbsy3bb7h"/>`,
		"fallback": "uix-sharp:stationary-boundary",
	});
}

export default Component;
