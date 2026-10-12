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
		"content": `<style>.aroylm_ta {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 15.75c2-4.5 4.25-9 5.75-8c2 1.25-3.5 8-1.25 8.25c1.75.25 3-3.75 4.75-3.75c1.25 0 .5 2.5 2 2.5s2.5-2.25 4.5-2.25M3.75 20.25h16.5");
}
</style><path class="aroylm_ta"/>`,
		"fallback": "iconoven:signature-stamp-sharp",
	});
}

export default Component;
