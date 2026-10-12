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
		"content": `<style>.ulx_ns05j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 19.5h3.5L8 18.25h3.25L12 19.5h8.25l1.111.006l-.111-1.106c-.3-2.4-1.9-3.4-4.35-4.15l-5.9-1.5H7.667L7.25 11.5h-4.5v8zm8.5-6L11.5 15m3-.75l-.75 1.5");
}
</style><path class="ulx_ns05j"/>`,
		"fallback": "iconoven:shoe-sharp",
	});
}

export default Component;
