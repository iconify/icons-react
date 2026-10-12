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
		"content": `<style>.d1dhd_jpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13h6.81m6.38 0H21v3.5h-1.31m-6.38 0H3V13m14.5 0v1.32M3.75 3.75l16.5 16.5");
}
</style><path class="d1dhd_jpv"/>`,
		"fallback": "iconoven:no-smoking-sharp",
	});
}

export default Component;
