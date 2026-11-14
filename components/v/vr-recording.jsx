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
		"content": `<style>.uglix6b8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h10A3.5 3.5 0 0 1 20.5 6v3.5A3.5 3.5 0 0 1 17 13h-2.25L12 10.25L9.25 13H7a3.5 3.5 0 0 1-3.5-3.5V6A3.5 3.5 0 0 1 7 2.5ZM2 7.75h1.5m17 0H22m-6.25 11a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><path class="uglix6b8g"/>`,
		"fallback": "uix-sharp:vr-recording",
	});
}

export default Component;
