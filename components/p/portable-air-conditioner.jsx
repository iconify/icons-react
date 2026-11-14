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
		"content": `<style>.uuc3dc8ip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7h11v12h-11ZM8 7c0-4 5.5-4.5 11.5-3v3c-4.5-1.25-8-1.5-8 0m-4 3h5m-5 3h5M7 21.75h.01m5.99 0h.01");
}
</style><path class="uuc3dc8ip"/>`,
		"fallback": "uix-sharp:portable-air-conditioner",
	});
}

export default Component;
