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
		"content": `<style>.o9orepoqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21v-5h5.5v-5H14V6h7v15ZM14.5 6c0-3 6.5-3 6.5 0");
}
</style><path class="o9orepoqz"/>`,
		"fallback": "uix-sharp:pet-stairs",
	});
}

export default Component;
