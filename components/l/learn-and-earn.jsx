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
		"content": `<style>.wlke_lbeo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2l9 4.25l-9 4.25l-9-4.25Zm9 4.25v4.25m-13 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm4 0h.01");
}
</style><path class="wlke_lbeo"/>`,
		"fallback": "uix-sharp:learn-and-earn",
	});
}

export default Component;
