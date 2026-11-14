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
		"content": `<style>.hnr85p9pe {
  d: path("M7.5 5L12 8.5L16.5 5M9 11.25l3-2.75l3 2.75");
}

.lop5vdbdd {
  d: path("M2 16.5a10 2.5 0 1 0 20 0a10 2.5 0 1 0-20 0Zm4 2v3m12-3v3m-7.5-18a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lop5vdbdd"/><path class="hnr85p9pe"/></g>`,
		"fallback": "uix-sharp:trampoline-park",
	});
}

export default Component;
