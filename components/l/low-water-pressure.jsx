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
		"content": `<style>.y-w7a9v9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 4h8a4 4 0 0 1 4 4v2h-3V8a1 1 0 0 0-1-1h-8ZM10 4V2M7.75 2h4.5M16 13v8.5m-2.75-2.75L16 21.5l2.75-2.75");
}
</style><path class="y-w7a9v9a"/>`,
		"fallback": "uix:low-water-pressure",
	});
}

export default Component;
