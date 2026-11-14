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
		"content": `<style>.qlv_elbqa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 18a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm10 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM8.5 15.75l9-12.25m-2 12.25L6.5 3.5");
}
</style><path class="qlv_elbqa"/>`,
		"fallback": "uix-sharp:pin-hairdresser",
	});
}

export default Component;
