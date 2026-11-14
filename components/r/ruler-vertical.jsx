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
		"content": `<style>.q0g0tsb6m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h10v19H7Zm0 4h3.5M7 10h5.5M7 13.5h3.5M7 17h5.5");
}
</style><path class="q0g0tsb6m"/>`,
		"fallback": "uix-sharp:ruler-vertical",
	});
}

export default Component;
