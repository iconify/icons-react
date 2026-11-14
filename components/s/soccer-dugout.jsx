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
		"content": `<style>.z-yvc90kc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20v-8a9.5 8 0 0 1 19 0v8m-15-4.5h11m-9.5 0V20m8-4.5V20");
}
</style><path class="z-yvc90kc"/>`,
		"fallback": "uix-sharp:soccer-dugout",
	});
}

export default Component;
