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
		"content": `<style>.o4aso2bgc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 2.5h2A3.5 3.5 0 0 1 16.5 6v8a3.5 3.5 0 0 1-3.5 3.5h-2A3.5 3.5 0 0 1 7.5 14V6A3.5 3.5 0 0 1 11 2.5m-5 18h12");
}
</style><path class="o4aso2bgc"/>`,
		"fallback": "uix:terminus-symbol",
	});
}

export default Component;
