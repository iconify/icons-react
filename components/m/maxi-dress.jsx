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
		"content": `<style>.dzi2nyb1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 2.5v3l-1 5L4 21.5h16l-4.25-11l-1-5v-3Q12 7 9.25 2.5m-1 8h7.5");
}
</style><path class="dzi2nyb1m"/>`,
		"fallback": "uix:maxi-dress",
	});
}

export default Component;
