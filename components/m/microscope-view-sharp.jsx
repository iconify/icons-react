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
		"content": `<style>.kf8gkt39q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 2.75h5v10.5h-5zm2.5 10.5v1m2.5-6h1.5a6 6 0 0 1 3.5 10.9v2.1m-12 0h14.5m-13.5-4h7");
}
</style><path class="kf8gkt39q"/>`,
		"fallback": "iconoven:microscope-view-sharp",
	});
}

export default Component;
