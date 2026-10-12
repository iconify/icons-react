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
		"content": `<style>.znf8-22oe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.25 3.75L14 10m0-5.25V10h5.25M3.75 20.25L10 14m0 5.25V14H4.75");
}
</style><path class="znf8-22oe"/>`,
		"fallback": "iconoven:minimize-sharp",
	});
}

export default Component;
