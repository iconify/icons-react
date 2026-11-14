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
		"content": `<style>.e7xk7r31c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5v10m-1.67 0h3.34a1.75 1.75 0 0 1 1.686 1.282l1.528 5.5a1.75 1.75 0 0 1-1.686 2.218H5.802a1.75 1.75 0 0 1-1.686-2.218l1.528-5.5A1.75 1.75 0 0 1 7.33 12.5m10.67 9V17c0-2.5 2-3.5 3-3.5c0 2-1.5 3.5-3 3.5m0 1.5c-1.25 0-1.75-1.25-1.75-2.5c1 0 1.75.75 1.75 2.5");
}
</style><path class="e7xk7r31c"/>`,
		"fallback": "uix:spring-cleaning",
	});
}

export default Component;
