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
		"content": `<style>.lx9btcboc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 2.5h6.5A1.75 1.75 0 0 1 17 4.25v1A1.75 1.75 0 0 1 15.25 7h-6.5A1.75 1.75 0 0 1 7 5.25v-1A1.75 1.75 0 0 1 8.75 2.5M12 7v14.5m-5 0l5-6.5l5 6.5M6.5 9.75l-2 2.5m13-2.5l2 2.5");
}
</style><path class="lx9btcboc"/>`,
		"fallback": "uix:lighting-tower",
	});
}

export default Component;
