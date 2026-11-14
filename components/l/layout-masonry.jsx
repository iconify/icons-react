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
		"content": `<style>.wv7np-_1u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h7.5v10H3Zm0 13h7.5v5H3ZM13.5 3H21v5h-7.5Zm0 8H21v10h-7.5Z");
}
</style><path class="wv7np-_1u"/>`,
		"fallback": "uix-sharp:layout-masonry",
	});
}

export default Component;
