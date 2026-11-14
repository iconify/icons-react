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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wbucrcioa {
  d: path("M21.25 9.5a9.5 9.5 0 1 1-6.75-6.75");
}

.wc-4ox-yl {
  d: path("m7 11l4 4l7.5-7.5");
}
</style><g class="ulnmmdpxh"><path class="wbucrcioa"/><path class="wc-4ox-yl"/></g>`,
		"fallback": "uix-sharp:status-complete",
	});
}

export default Component;
