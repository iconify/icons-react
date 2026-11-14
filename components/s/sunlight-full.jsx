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
		"content": `<style>.tkezxhv-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0ZM12 2.5v2.25m0 14.5v2.25M2.5 12h2.25m14.5 0h2.25m-4-5.5h.01M6.5 6.5h.01m10.99 11h.01m-11.01 0h.01");
}
</style><path class="tkezxhv-x"/>`,
		"fallback": "uix-sharp:sunlight-full",
	});
}

export default Component;
