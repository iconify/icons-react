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
		"content": `<style>.sctgx-b8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.25h18.5M4.25 6h15.5v10.75H4.25zm4.25 7.25v-2m3.5 2v-4.5m3.5 4.5v-3.5m-3.5 7v4.5m0-4.5l-3.5 4.5m3.5-4.5l3.5 4.5");
}
</style><path class="sctgx-b8r"/>`,
		"fallback": "iconoven:presentation-screen-sharp",
	});
}

export default Component;
