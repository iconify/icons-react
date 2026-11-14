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
		"content": `<style>.tbzhrsbwn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.4 18H2.5v-3h9.7M5 18h4l-4 3.5Zm7.2-3H5.5V8.5h7v6m-7-3.5h7m1.75 7a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM18 16v2m0 2h.01");
}
</style><path class="tbzhrsbwn"/>`,
		"fallback": "uix-sharp:limited-stock-sign",
	});
}

export default Component;
