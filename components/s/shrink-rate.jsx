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
		"content": `<style>.h-2erkb4q {
  d: path("M16.5 4.75L12 2.5L3 7v10l8.056 4.028M16.5 4.75v4.5l3.744 2.496");
}

.p8j1yfveb {
  d: path("m3 7l9 4.5l4.5-2.25M12 11.5v8.6m6-14.6l1.5.75M21 8.5V10m-6.25 11.25l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h-2erkb4q"/><path class="p8j1yfveb"/></g>`,
		"fallback": "uix-sharp:shrink-rate",
	});
}

export default Component;
