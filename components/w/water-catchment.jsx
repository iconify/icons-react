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
		"content": `<style>.phvmt65mh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13.5h18c0 4.5-4 8-9 8s-9-3.5-9-8m9-11s-3 3.25-3 5a3 3 0 0 0 6 0c0-1.75-3-5-3-5M5.5 4v5m13-5v5");
}
</style><path class="phvmt65mh"/>`,
		"fallback": "uix:water-catchment",
	});
}

export default Component;
