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
		"content": `<style>.zih66fbbh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21.5V8m0 0a5 5 0 0 1 5-5m0 0h9l-1.5 3h-6ZM3.5 21.5h5M13 9l-1 2.5M16 9v2.75M19 9l1 2.5");
}
</style><path class="zih66fbbh"/>`,
		"fallback": "uix-sharp:street-light-led",
	});
}

export default Component;
