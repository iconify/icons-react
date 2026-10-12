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
		"content": `<style>.lco2l0b2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 7.5a7.75 3.25 0 0 1 15.5 0Zm-1.5 3h18.5v10.75H2.75zm0 5.25h18.5");
}
</style><path class="lco2l0b2y"/>`,
		"fallback": "iconoven:steamer-basket-sharp",
	});
}

export default Component;
