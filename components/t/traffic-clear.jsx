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
		"content": `<style>.vdhkpklgo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21.5l5-19m7.5 0l3 11.5M11.75 3v3m0 3.5V13m0 3.5v.6m0 1.8v1.6m3-2.5l2 2L21 15.75");
}
</style><path class="vdhkpklgo"/>`,
		"fallback": "uix-sharp:traffic-clear",
	});
}

export default Component;
