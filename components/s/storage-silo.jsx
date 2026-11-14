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
		"content": `<style>.qnpcxac3f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.625 3h6.75A2.625 2.625 0 0 1 18 5.625v4.75A2.625 2.625 0 0 1 15.375 13h-6.75A2.625 2.625 0 0 1 6 10.375v-4.75A2.625 2.625 0 0 1 8.625 3m.385 10h5.98a1.145 1.145 0 0 1 .76 2l-1.824 1.621a1.5 1.5 0 0 1-.996.379h-1.86a1.5 1.5 0 0 1-.996-.379L8.25 15a1.145 1.145 0 0 1 .76-2M7 13v8m10-8v8m-5-4v2.5m-6-12h12");
}
</style><path class="qnpcxac3f"/>`,
		"fallback": "uix:storage-silo",
	});
}

export default Component;
