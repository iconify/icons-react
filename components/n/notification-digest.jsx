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
		"content": `<style>.wvpp8ybky {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5h9M5 5.5h14m-16.5 3h19v13h-19Zm4 4.5h11m-11 4h6");
}
</style><path class="wvpp8ybky"/>`,
		"fallback": "uix-sharp:notification-digest",
	});
}

export default Component;
