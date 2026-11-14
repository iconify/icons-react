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
		"content": `<style>.jbvls3bfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7a9 2.5 0 1 0 18 0A9 2.5 0 1 0 3 7m9 2.5v11m-4.5 0h9");
}
</style><path class="jbvls3bfe"/>`,
		"fallback": "uix:side-table",
	});
}

export default Component;
