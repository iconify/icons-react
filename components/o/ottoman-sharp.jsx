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
		"content": `<style>.mkh5c8b4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 6.25h16.5v4.5H3.75zm1.5 4.5h13.5v8.5H5.25zm2.5 8.5v2m8.5-2v2");
}
</style><path class="mkh5c8b4a"/>`,
		"fallback": "iconoven:ottoman-sharp",
	});
}

export default Component;
