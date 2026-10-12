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
		"content": `<style>.d05sv8x9m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h10.5v15.5H2.75zm3 4h5m-5 3.25h5m-5 3.25h2.5m7.25-.75h5.75v8.75H15.5zm2.88 0v3");
}
</style><path class="d05sv8x9m"/>`,
		"fallback": "iconoven:order-picking-sharp",
	});
}

export default Component;
