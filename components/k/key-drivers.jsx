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
		"content": `<style>.npnprfbuw {
  d: path("M13.75 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM2.5 2.5l11 5.5m-3 .5l3-.5L12 5.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wxnofbhwe {
  fill: currentColor;
  d: path("M2.5 10.75h6v-1.5L11.75 12L8.5 14.75v-1.5h-6ZM2.25 21l8.5-4.25l-.5-1.25l3.25.5l-1.5 3l-.75-1.25L2.75 22Z");
}
</style><g class="ulnmmdpxh"><path class="npnprfbuw"/><path class="wxnofbhwe"/></g>`,
		"fallback": "uix-sharp:key-drivers",
	});
}

export default Component;
