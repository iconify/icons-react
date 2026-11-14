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
		"content": `<style>.e7a6hdbqf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 20.5h10l-3-17h-4Zm5-4L15.5 7M9 16.5h6");
}
</style><path class="e7a6hdbqf"/>`,
		"fallback": "uix-sharp:takt-time",
	});
}

export default Component;
