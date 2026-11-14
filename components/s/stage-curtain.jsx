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
		"content": `<style>.nx07kybqp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19M4 3.5v17h3c.5-3.5 1.5-5 3-6C7 12 6 8 6.25 3.5M20 3.5v17h-3c-.5-3.5-1.5-5-3-6c3-2.5 4-6.5 3.75-11");
}
</style><path class="nx07kybqp"/>`,
		"fallback": "uix:stage-curtain",
	});
}

export default Component;
