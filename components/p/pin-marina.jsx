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
		"content": `<style>.a1e_z_b7m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 16h18l-2.5 4.5h-13Zm9-13.5V16m0-13L5 13h7m3-7l4.5 7H15Z");
}
</style><path class="a1e_z_b7m"/>`,
		"fallback": "uix-sharp:pin-marina",
	});
}

export default Component;
