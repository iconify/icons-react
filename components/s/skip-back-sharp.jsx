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
		"content": `<style>.pomijbckr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m17.81 5.74l-7.62 5.27l-1.44.99l1.44.99l7.62 5.27l1.44.99V4.75zM4.75 4.75v14.5");
}
</style><path class="pomijbckr"/>`,
		"fallback": "iconoven:skip-back-sharp",
	});
}

export default Component;
