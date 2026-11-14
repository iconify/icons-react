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
		"content": `<style>.wz_6uab2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Zm10.75 8.25a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM16.75 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM7.5 8.5h.01m3.24 3h.01");
}
</style><path class="wz_6uab2a"/>`,
		"fallback": "uix-sharp:microbiome",
	});
}

export default Component;
