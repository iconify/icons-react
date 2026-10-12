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
		"content": `<style>.qmw3pb6sp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.6 2.75c2.67 3.08 2.67 6.17 0 9.25s-2.67 6.17 0 9.25m4.75-18.5c2.67 3.08 2.67 6.17 0 9.25s-2.67 6.17 0 9.25");
}
</style><path class="qmw3pb6sp"/>`,
		"fallback": "iconoven:river",
	});
}

export default Component;
