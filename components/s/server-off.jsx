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
		"content": `<style>.cdxlpnbwt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.4 3.5H21v7h-6.6m-7.8 0H3V6.9m13.6 13.6H3v-7h6.6m7.8 0H21v3.6M6.75 17h.01M11.5 7h6m-6 10h1.6M3.5 3.5l17 17");
}
</style><path class="cdxlpnbwt"/>`,
		"fallback": "uix-sharp:server-off",
	});
}

export default Component;
