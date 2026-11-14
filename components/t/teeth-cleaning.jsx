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
		"content": `<style>.bqmef3pml {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 6c1.5 0 2 1 3 1s1.5-1 3-1c2.25 0 3.5 2 3.5 4.5c0 3-1.25 4.25-1.75 6.5L13 20.5c-.25 1-1.25 1.25-1.75.25L10 17.5c-.5-1-1.5-1-2 0l-1.25 3.25c-.5 1-1.5.75-1.75-.25L4.25 17c-.5-2.25-1.75-3.5-1.75-6.5C2.5 8 3.75 6 6 6m13-4q0 3 3 3q-3 0-3 3q0-3-3-3q3 0 3-3");
}
</style><path class="bqmef3pml"/>`,
		"fallback": "uix:teeth-cleaning",
	});
}

export default Component;
