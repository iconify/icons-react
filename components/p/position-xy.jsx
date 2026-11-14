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
		"content": `<style>.lfcaef3gu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5H21m-8.75-11a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-5.75 0h3m5 5v3");
}
</style><path class="lfcaef3gu"/>`,
		"fallback": "uix-sharp:position-xy",
	});
}

export default Component;
