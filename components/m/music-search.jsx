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
		"content": `<style>.t704y8box {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 17.5v-14l5 2.5m-11 11.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm11.5-.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM19 19l1.75 1.75");
}
</style><path class="t704y8box"/>`,
		"fallback": "uix-sharp:music-search",
	});
}

export default Component;
