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
		"content": `<style>.h5k4pob5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5H8v-4h8v4h5.5m-9.5-7V4M7.5 8.5L12 4l4.5 4.5");
}
</style><path class="h5k4pob5g"/>`,
		"fallback": "uix-sharp:position-gained",
	});
}

export default Component;
