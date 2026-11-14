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
		"content": `<style>.pbekm2b0s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21.5l6-18h6l6 18Zm2-6h14m-12-6h10m-5 12v-6m-2.5 0v-6m5 6v-6m-2.5 0v-6");
}
</style><path class="pbekm2b0s"/>`,
		"fallback": "uix-sharp:path-brick",
	});
}

export default Component;
