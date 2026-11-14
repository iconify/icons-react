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
		"content": `<style>.ixsjsr_0r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 13V4.5a2.25 2.25 0 0 1 4.5 0V13a4.5 4.5 0 1 1-4.5 0Zm2.25 4h.01M18 14.75v3.5M18 21h.01");
}
</style><path class="ixsjsr_0r"/>`,
		"fallback": "uix-sharp:temperature-low-alert",
	});
}

export default Component;
