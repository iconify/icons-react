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
		"content": `<style>.gfjiv5boi {
  d: path("m12 3.25l4.25 2.5v5L12 13.25l-4.25-2.5v-5Z");
}

.nofw6la6m {
  d: path("m7.75 10.75l4.25 2.5v5l-4.25 2.5l-4.25-2.5v-5Zm8.5 0l4.25 2.5v5l-4.25 2.5l-4.25-2.5v-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nofw6la6m"/><path class="gfjiv5boi"/></g>`,
		"fallback": "uix-sharp:segmented-mirror",
	});
}

export default Component;
