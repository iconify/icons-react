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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.js9nr_bbi {
  d: path("m12.877 5.008l6.007 3.478a1.75 1.75 0 0 1 0 3.028l-6.007 3.478a1.75 1.75 0 0 1-1.754 0l-6.007-3.478a1.75 1.75 0 0 1 0-3.028l6.007-3.478a1.75 1.75 0 0 1 1.754 0");
}

.y24iisb2w {
  d: path("m2.5 13.75l9.5 5.5l9.5-5.5M8.75 10l1.75-1.5h4.75v3H10.5z");
}
</style><g class="hntgybcog"><path class="js9nr_bbi"/><path class="y24iisb2w"/></g>`,
		"fallback": "uix:semantic-layer",
	});
}

export default Component;
