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
		"content": `<style>.no9jhb0mh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM2.5 21.5C2.5 17.5 5 15 8 15s5.5 2.5 5.5 6.5m3.25 0L14.5 4.75q-.25-2.25 1.5-2m4.75 18.75L18.5 4.75q-.25-2.25 1.5-2");
}
</style><path class="no9jhb0mh"/>`,
		"fallback": "uix-sharp:skier-carrying-skis",
	});
}

export default Component;
