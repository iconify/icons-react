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
		"content": `<style>.xievgebgp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 7.5l7-5l7 5Zm1.5 2.75h11m-8.5 0V18m6-7.75V18m-9 0h12v3.5H6Z");
}
</style><path class="xievgebgp"/>`,
		"fallback": "uix-sharp:justice-column",
	});
}

export default Component;
