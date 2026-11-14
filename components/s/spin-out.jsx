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
		"content": `<style>.xfdo_vv-j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.52 13.591l7.071-7.071l3.889 3.889l-7.071 7.071Zm4.95-4.95l3.889 3.889m-6.718-1.06l3.889 3.889M4 12a8 8 0 0 1 8-8m-1.75-1.75L12 4l-1.75 1.75M20 12a8 8 0 0 1-8 8m1.75-1.75L12 20l1.75 1.75");
}
</style><path class="xfdo_vv-j"/>`,
		"fallback": "uix-sharp:spin-out",
	});
}

export default Component;
