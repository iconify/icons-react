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
		"content": `<style>.ufuf59why {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 21.25v-2.5c2-1.25 4-1.75 6-1c2-1.5 4.5-1.75 6.5-1c2.25-.75 4.25-.5 6 .5v4ZM6.5 16.5c-1-1.5 1-3 0-4.5s1-3 0-4.5m11.25 7.75c1-1.25-1-2.5 0-3.75M9.5 5.75L11 7q2.5-2.8 5 0q-2.5 2.8-5 0L9.5 8.25Z");
}
</style><path class="ufuf59why"/>`,
		"fallback": "iconoven:ocean-floor-sharp",
	});
}

export default Component;
