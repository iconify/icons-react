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
		"content": `<style>.qzfqad1zn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h5V16h5.5v-4.5H21m-3.5 0v-8m0 0l3.25 1.75L17.5 7Z");
}
</style><path class="qzfqad1zn"/>`,
		"fallback": "uix-sharp:learning-milestone",
	});
}

export default Component;
