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
		"content": `<style>.c98sag88a {
  d: path("M17 20.5v-16l-12 12");
}

.ct94oip3d {
  d: path("M5 11.5v5h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c98sag88a"/><path class="ct94oip3d"/></g>`,
		"fallback": "uix-sharp:lane-arrow-sharp-left",
	});
}

export default Component;
