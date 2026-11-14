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
		"content": `<style>.ra5chu9hy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 5.5h9.5M11 12h9.5M11 18.5h9.5M5.5 4v16M3.25 6.25L5.5 4l2.25 2.25m-4.5 11.5L5.5 20l2.25-2.25");
}
</style><path class="ra5chu9hy"/>`,
		"fallback": "uix-sharp:line-height",
	});
}

export default Component;
