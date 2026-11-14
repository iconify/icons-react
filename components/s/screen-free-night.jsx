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
		"content": `<style>.o-ep5eb8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 11.1V2.5h8.6m1.9 5.9v3.5m-3.4 8.6H5v-1.6M16.5 3.5l-13 13m15.25-2.25a3.75 3.75 0 1 0 3 4.5a3 3 0 0 1-3-4.5Z");
}
</style><path class="o-ep5eb8g"/>`,
		"fallback": "uix-sharp:screen-free-night",
	});
}

export default Component;
