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
		"content": `<style>.sbhzvsfqj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 10.5h10v3a5 5 0 0 1-10 0ZM4 3h16M9.5 3v7.5m5-7.5v7.5m-2.5 8v3");
}
</style><path class="sbhzvsfqj"/>`,
		"fallback": "uix-sharp:plug-connected",
	});
}

export default Component;
