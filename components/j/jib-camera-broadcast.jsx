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
		"content": `<style>.dz33d_emn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 18l12-9m-8 6l-3 6.5M7 15l3 6.5m4-17h5.5V9H14Zm5.5 1l2-1V9l-2-1Z");
}
</style><path class="dz33d_emn"/>`,
		"fallback": "uix-sharp:jib-camera-broadcast",
	});
}

export default Component;
