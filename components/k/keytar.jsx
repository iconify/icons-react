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
		"content": `<style>.jhcud0_iw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7.5h10l2 2.5h4.5v3H17l-2 3.5H5A2.5 2.5 0 0 1 2.5 14v-4A2.5 2.5 0 0 1 5 7.5Zm2 0V12m3-4.5V12m3-4.5V12");
}
</style><path class="jhcud0_iw"/>`,
		"fallback": "uix-sharp:keytar",
	});
}

export default Component;
