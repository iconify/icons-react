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
		"content": `<style>.zuvjncbju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h11v11h-11ZM8 9V3.5m7.975 8.525a3.5 3.5 0 0 1 0 4.95M18.45 9.55a7 7 0 0 1 0 9.9");
}
</style><path class="zuvjncbju"/>`,
		"fallback": "uix-sharp:nb-iot",
	});
}

export default Component;
