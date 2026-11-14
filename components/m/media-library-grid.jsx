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
		"content": `<style>.zp2366bwi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h7.5v7.5H3Zm10.5 0H21v7.5h-7.5ZM3 13.5h7.5V21H3Zm11 0l7 3.75L14 21Z");
}
</style><path class="zp2366bwi"/>`,
		"fallback": "uix-sharp:media-library-grid",
	});
}

export default Component;
