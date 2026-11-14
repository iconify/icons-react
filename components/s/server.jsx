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
		"content": `<style>.wi28rsb5a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h18v7H3Zm0 10h18v7H3ZM6.75 7h.01m-.01 10h.01M11.5 7h6m-6 10h6");
}
</style><path class="wi28rsb5a"/>`,
		"fallback": "uix-sharp:server",
	});
}

export default Component;
