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
		"content": `<style>.llo3vibby {
  d: path("m17.5 17.25l-.75 3l3 .75");
}

.qw2gqobqj {
  d: path("M4 15h10l-1 6H5Zm5 0v-5m0 0c0-3-2-5-5-5c0 3 2 5 5 5Zm0 0c0-2.5 1.5-4.5 4.5-4.5C13.5 8 11.75 9.75 9 10Zm7.75-6.227a9.5 9.5 0 0 1 0 16.454");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qw2gqobqj"/><path class="llo3vibby"/></g>`,
		"fallback": "uix-sharp:plant-rotate",
	});
}

export default Component;
