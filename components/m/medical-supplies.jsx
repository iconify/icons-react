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
		"content": `<style>.bz2g8vbkl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5h12v12h-12Zm0 0l4-4.5H20l-5.5 4.5M20 5v12l-5.5 4.5m-6-9v6m-3-3h6");
}
</style><path class="bz2g8vbkl"/>`,
		"fallback": "uix-sharp:medical-supplies",
	});
}

export default Component;
