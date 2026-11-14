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
		"content": `<style>.cd7gedcbl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 8l12.5-5l-5 12.5l-2.5-5Zm5 2.5L15.5 3m0 12.5l5 5m0-5l-5 5");
}
</style><path class="cd7gedcbl"/>`,
		"fallback": "uix-sharp:send-x",
	});
}

export default Component;
