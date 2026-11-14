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
		"content": `<style>.z4a3u9iro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.298 17.236C10.946 18.731 8.084 19.386 5 19c-.394-3.155.144-6.076 1.586-8.458m3.998-3.907C12.881 5.281 15.86 4.5 19.5 4.5c0 3.404-.834 6.358-2.273 8.702M3 21l7-7M3.5 3.5l17 17");
}
</style><path class="z4a3u9iro"/>`,
		"fallback": "uix:leaf-off",
	});
}

export default Component;
