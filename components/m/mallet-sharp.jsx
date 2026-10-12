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
		"content": `<style>.ci1479ifd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.75h16.5v7.5H3.75zm4 2.25v3m8.5-3v3m-5.75 2.25h3v11h-3z");
}
</style><path class="ci1479ifd"/>`,
		"fallback": "iconoven:mallet-sharp",
	});
}

export default Component;
