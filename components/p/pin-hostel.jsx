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
		"content": `<style>.ygx7wgbpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5v17m16-17v17M4 10h16M4 17h16M6.5 6.5h5V10h-5Zm0 7h5V17h-5Z");
}
</style><path class="ygx7wgbpq"/>`,
		"fallback": "uix-sharp:pin-hostel",
	});
}

export default Component;
