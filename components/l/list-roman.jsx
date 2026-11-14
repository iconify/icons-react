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
		"content": `<style>.k4jgkkbpz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 6.5h9m-9 8.5h9M3.5 4H7M5.25 4v5M3.5 9H7m-4.5 3.5h6m-4.5 0v5m3-5v5m-4.5 0h6");
}
</style><path class="k4jgkkbpz"/>`,
		"fallback": "uix-sharp:list-roman",
	});
}

export default Component;
