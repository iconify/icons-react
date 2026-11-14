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
		"content": `<style>.mgqzfybxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5h11A1.5 1.5 0 0 1 19 4v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 8.5V4a1.5 1.5 0 0 1 1.5-1.5Zm0 11.5h11a1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20v-4.5A1.5 1.5 0 0 1 6.5 14Zm4-4v4m3-4v4");
}
</style><path class="mgqzfybxm"/>`,
		"fallback": "uix-sharp:pull-buoy",
	});
}

export default Component;
