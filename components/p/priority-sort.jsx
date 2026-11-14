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
		"content": `<style>.ipf4izd0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6h11M3 12h8m-8 6h5M18.5 4v16m-3-3l3 3l3-3");
}
</style><path class="ipf4izd0p"/>`,
		"fallback": "uix-sharp:priority-sort",
	});
}

export default Component;
