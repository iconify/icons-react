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
		"content": `<style>.ypz5yurqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 3.75h-5.5v16.5h5.5m11-8.25H9.75m6.75-3.75L20.25 12l-3.75 3.75");
}
</style><path class="ypz5yurqd"/>`,
		"fallback": "iconoven:log-out-sharp",
	});
}

export default Component;
