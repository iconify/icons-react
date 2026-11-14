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
		"content": `<style>.uq9y74gmf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5V21m3.25-7v7M9 10.5V21m3.25-14v9.6m0 2.8V21M15.5 3v11.8m-.75 3.2l2 2L21 15.75");
}
</style><path class="uq9y74gmf"/>`,
		"fallback": "uix-sharp:signal-check",
	});
}

export default Component;
