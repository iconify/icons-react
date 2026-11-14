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
		"content": `<style>.zb6tmvb3m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.603 11.58A10 10 0 0 1 4.34 8.572m5.014-3.215q.45-.124.91-.205m3.472 0a10 10 0 0 1 4 1.656m1.924 1.764a10 10 0 0 1 1.737 3.008m0 .84a10 10 0 0 1-1.737 3.008m-5.014 3.215q-.45.124-.91.205m-3.472 0a10 10 0 0 1-4-1.656M4.34 15.428a10 10 0 0 1-1.737-3.008M3.5 3.5l17 17");
}
</style><path class="zb6tmvb3m"/>`,
		"fallback": "uix-sharp:invisible",
	});
}

export default Component;
