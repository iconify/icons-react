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
		"content": `<style>.f-8hlyb5l {
  d: path("M5.5 11c0-2.75 2.5-4 5-3.5c3 .5 4 3 3.25 5.25s-3.25 3-5.25 2.5s-3-2.25-3-4.25Zm4.25.25h.01M15 16.5h3.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrcg6qhaf {
  d: path("M2.5 4.5h19v15h-19Z");
}
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="f-8hlyb5l"/></g>`,
		"fallback": "uix-sharp:micrograph",
	});
}

export default Component;
