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
		"content": `<style>.aeqdfp_dl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5.5v10M12 8c0-3 2.5-5 6-5c0 3.5-2.5 5-6 5m0 3c0-3-2.5-5-6-5c0 3.5 2.5 5 6 5m0 4.5V21m0-5.5q-3.5 1-4 5m4-5q3.5 1 4 5");
}
</style><path class="aeqdfp_dl"/>`,
		"fallback": "uix:root-cutting",
	});
}

export default Component;
