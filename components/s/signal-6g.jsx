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
		"content": `<style>.wkhs9xbcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21v-3m2.75 3v-5.75M8 21v-8.5m2.75 8.5V9.75M13.5 7h2.75v14H13.5ZM19 3h2.75v18H19Z");
}
</style><path class="wkhs9xbcz"/>`,
		"fallback": "uix-sharp:signal-6g",
	});
}

export default Component;
