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
		"content": `<style>.r0py3o6qr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3H15M4.5 7.75h15m-13 4.75h9m-7 4.75h6m3-2.5l2.5 2.5l-2.5 2.5");
}
</style><path class="r0py3o6qr"/>`,
		"fallback": "uix-sharp:log-stream",
	});
}

export default Component;
