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
		"content": `<style>.ezj6mfb3l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v18m0-7h5m0-6c0-1.5 1-2.5 2.5-2.5h8A2.5 2.5 0 0 1 21.5 8v4.5c0 3-2.5 5-6 5H11A2.5 2.5 0 0 1 8.5 15Zm4 5.5l4-4");
}
</style><path class="ezj6mfb3l"/>`,
		"fallback": "uix-sharp:side-mirror",
	});
}

export default Component;
