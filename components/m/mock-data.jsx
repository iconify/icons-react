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
		"content": `<style>.en58i-pqt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5.5a7.5 3 0 1 0 15 0a7.5 3 0 1 0-15 0Zm0 0v3m0 2.75v3m0 2.75v1.5a7.5 3 0 0 0 2.75 2.25m2.75.75h4m2.75-.75a7.5 3 0 0 0 2.75-2.25V17m0-2.75v-3m0-2.75v-3");
}
</style><path class="en58i-pqt"/>`,
		"fallback": "uix-sharp:mock-data",
	});
}

export default Component;
