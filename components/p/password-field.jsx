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
		"content": `<style>.wkddgwdma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v10.5h-19ZM6 8.25h.01m3.49 0h.01m3.49 0h.01m3.49-2.5v5m-2.5 8a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4.5 0h3m-1 0V21");
}
</style><path class="wkddgwdma"/>`,
		"fallback": "uix-sharp:password-field",
	});
}

export default Component;
