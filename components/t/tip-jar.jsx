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
		"content": `<style>.v6p7xe1ie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 6.5h14v3H5Zm1.5 3C4.75 12 4.75 21 8.5 21h7c3.75 0 3.75-9 2-11.5M9 6.5l1-4h5l-.5 4");
}
</style><path class="v6p7xe1ie"/>`,
		"fallback": "uix-sharp:tip-jar",
	});
}

export default Component;
