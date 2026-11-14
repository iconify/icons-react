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
		"content": `<style>.uzggc0igp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5h5v7c2 0 3 1.25 3 3.5v3h-8Zm11 0h5v7c2 0 3 1.25 3 3.5v3h-8Zm-11 3h5m6 0h5");
}
</style><path class="uzggc0igp"/>`,
		"fallback": "uix-sharp:rain-boots-kids",
	});
}

export default Component;
