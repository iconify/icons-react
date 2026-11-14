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
		"content": `<style>.hqek8hc6i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 21.5l5-19m11 19l-5-19M8.75 15a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM12 5.5h.01");
}
</style><path class="hqek8hc6i"/>`,
		"fallback": "uix-sharp:lane-booking",
	});
}

export default Component;
