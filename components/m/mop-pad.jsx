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
		"content": `<style>.zyhy_fbrs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 5h11A3.5 3.5 0 0 1 21 8.5v2a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 10.5v-2A3.5 3.5 0 0 1 6.5 5M6 14v5m4-5v5m4-5v5m4-5v5");
}
</style><path class="zyhy_fbrs"/>`,
		"fallback": "uix:mop-pad",
	});
}

export default Component;
