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
		"content": `<style>.ja1yeubia {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm8.75 3.75C12.5 7 16.5 4.5 19.5 6.5c1.5 1 2 3.5 1.5 6.5M2.5 18.5c3.5-1.75 6.5-1.75 10 0q5.25 2.625 9 0");
}
</style><path class="ja1yeubia"/>`,
		"fallback": "uix-sharp:swimmer-freestyle",
	});
}

export default Component;
