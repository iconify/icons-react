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
		"content": `<style>.b5j8yrbqv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 2.5A5.5 5.5 0 1 0 18 8a5.5 5.5 0 0 1-5.5-5.5M4 17q8-1 16 0q1 2.25 0 4.5q-8-1-16 0q-1-2.25 0-4.5");
}
</style><path class="b5j8yrbqv"/>`,
		"fallback": "uix:sleep-recovery",
	});
}

export default Component;
