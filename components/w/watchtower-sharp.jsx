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
		"content": `<style>.c7qhwabuy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.51 6.69l5.98-3.63l.51-.31l.51.31l5.98 3.63L19 7H5zM7 7.75v3m10-3v3M5.75 11h12.5v2.5H5.75zm1.75 2.5L5 21.25m11.5-7.75l2.5 7.75m-8.25-7.75v7.75m2.5-7.75v7.75m-2.5-4.75h2.5m-2.5 2.5h2.5");
}
</style><path class="c7qhwabuy"/>`,
		"fallback": "iconoven:watchtower-sharp",
	});
}

export default Component;
