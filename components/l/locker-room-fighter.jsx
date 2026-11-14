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
		"content": `<style>.ww7v5q48x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 21.3v.2H2.5v-19H13v11.7M5.5 6H10M5.5 8.75H10m5.5 9.75v-2a3 3 0 0 1 6 0v2Zm0-1.5h2.75M16 18.5h5v3h-5Z");
}
</style><path class="ww7v5q48x"/>`,
		"fallback": "uix-sharp:locker-room-fighter",
	});
}

export default Component;
