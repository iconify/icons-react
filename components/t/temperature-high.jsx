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
		"content": `<style>.zzmq8ub2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 13V5.25a2.75 2.75 0 0 1 5.5 0V13a4.25 4.25 0 1 1-5.5 0ZM7.5 5.25v11M17 20V4m-3.5 3.5L17 4l3.5 3.5");
}
</style><path class="zzmq8ub2p"/>`,
		"fallback": "uix-sharp:temperature-high",
	});
}

export default Component;
