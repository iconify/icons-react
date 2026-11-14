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
		"content": `<style>.fwdxjebns {
  d: path("M4.5 10.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.to8bp24wv {
  d: path("m12 7l3.25 2.5L14 13.25h-4L8.75 9.5Zm0 0V3m3.25 6.5l4-1.25m-5.25 5l2.5 3.25M10 13.25L7.5 16.5m1.25-7l-4-1.25M2.5 20.75h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fwdxjebns"/><path class="to8bp24wv"/></g>`,
		"fallback": "uix-sharp:soccer-goal-line",
	});
}

export default Component;
