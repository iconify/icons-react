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
		"content": `<style>.z4r3i2b_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6h11.5M9 12h11.5M9 18h7.5M3 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="z4r3i2b_f"/>`,
		"fallback": "uix-sharp:map-list-view",
	});
}

export default Component;
