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
		"content": `<style>.b4k1bo0yk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3v18M4 3h6.5L9 5.75l1.5 2.75H4m9.5.5v12m0-12H20l-1.5 2.75L20 14.5h-6.5m-9.5 3h9.5");
}
</style><path class="b4k1bo0yk"/>`,
		"fallback": "uix-sharp:milestone-linked",
	});
}

export default Component;
