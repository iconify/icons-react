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
		"content": `<style>.a8pp2gb-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 8v13.5m0-7a4 4 0 0 0 8 0m0-6.5v8.75c0 1.5 1 2.25 2.5 2");
}
</style><path class="a8pp2gb-e"/>`,
		"fallback": "uix-sharp:mu",
	});
}

export default Component;
