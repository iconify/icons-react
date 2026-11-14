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
		"content": `<style>.q9hfr123i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 21.5l5-10.25l5 10.25m-5-13h.01m3.49-3a4.5 4.5 0 0 1 0 6m-7-6a4.5 4.5 0 0 0 0 6M18 3.25a8 8 0 0 1 0 10.5M6 3.25a8 8 0 0 0 0 10.5");
}
</style><path class="q9hfr123i"/>`,
		"fallback": "uix-sharp:public-broadcaster-tower",
	});
}

export default Component;
