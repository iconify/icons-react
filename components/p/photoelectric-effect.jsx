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
		"content": `<style>.yf1w-o0ak {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17h19v4h-19ZM4 3l6.5 11.25m-3.5 0h3.5v-3.5m3 3.5l2.5-4m0-4.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><path class="yf1w-o0ak"/>`,
		"fallback": "uix-sharp:photoelectric-effect",
	});
}

export default Component;
