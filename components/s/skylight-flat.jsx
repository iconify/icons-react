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
		"content": `<style>.wg-uy1bvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12h17v8.5h-17ZM8 8.25h8V12H8Zm4-5.75v2.25m-5-1L8.25 5M17 3.75L15.75 5");
}
</style><path class="wg-uy1bvf"/>`,
		"fallback": "uix-sharp:skylight-flat",
	});
}

export default Component;
