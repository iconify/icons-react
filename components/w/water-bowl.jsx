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
		"content": `<style>.f71wv6bvq {
  d: path("M3 6.5h18a9 9 0 0 1-18 0Zm6 12h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yz_4d5byv {
  d: path("M7.5 10.5q1.5-1.25 3 0t3 0t3 0");
}
</style><g class="ulnmmdpxh"><path class="f71wv6bvq"/><path class="yz_4d5byv"/></g>`,
		"fallback": "uix-sharp:water-bowl",
	});
}

export default Component;
