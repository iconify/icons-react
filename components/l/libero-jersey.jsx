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
		"content": `<style>.kyda2acwj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3L3 6.5L5 11l2-1v11h10V10l2 1l2-4.5L16 3l-4 5Zm2 2.5L7 10");
}
</style><path class="kyda2acwj"/>`,
		"fallback": "uix-sharp:libero-jersey",
	});
}

export default Component;
