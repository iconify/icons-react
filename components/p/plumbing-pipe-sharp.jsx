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
		"content": `<style>.h3pvhobox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 10H2.75v4H8m8-4h5.25v4H16m-6 2.75v4.5h4v-4.5M8 7.5h8v9.25H8z");
}
</style><path class="h3pvhobox"/>`,
		"fallback": "iconoven:plumbing-pipe-sharp",
	});
}

export default Component;
