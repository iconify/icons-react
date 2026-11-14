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
		"content": `<style>.km4-aybbf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 4h20M3 20.5v-8.75h18v8.75M7 11.75v8.75m10-8.75v8.75M3 11.75L7.5 4l4.5 7.75L16.5 4l4.5 7.75");
}
</style><path class="km4-aybbf"/>`,
		"fallback": "uix-sharp:rail-bridge",
	});
}

export default Component;
