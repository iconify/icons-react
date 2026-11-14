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
		"content": `<style>.abg9vjunv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h13m-13 19h8M5 2.5V5c0 3 5 5 5 7s-5 4-5 7v2.5m10-19V5c0 3-5 5-5 7c0 1.196 1.787 2.392 3.225 3.801M7.5 19.5h4.4m4.1-3.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1.75 6c0-1.75 1.75-3 3.75-3s3.75 1.25 3.75 3");
}
</style><path class="abg9vjunv"/>`,
		"fallback": "uix-sharp:labour-hours",
	});
}

export default Component;
