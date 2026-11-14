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
		"content": `<style>.zj73kmbjx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7.5H17l-1 14H5.5Zm7.5 0a4 4 0 0 1 8 0M4.75 11h12M16 7.5L14 4m2 3.5L18 4");
}
</style><path class="zj73kmbjx"/>`,
		"fallback": "uix-sharp:orange-juice",
	});
}

export default Component;
