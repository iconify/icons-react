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
		"content": `<style>.h3crcpbzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9.25l4.5-4.5l4.5 4.5l4.5-4.5l4.5 4.5m-18 5l4.5-4.5l4.5 4.5l4.5-4.5l4.5 4.5m-18 5l4.5-4.5l4.5 4.5l4.5-4.5l4.5 4.5m-18-10v10m4.5-14.5v10m4.5-5.5v10m4.5-14.5v10m4.5-5.5v10");
}
</style><path class="h3crcpbzn"/>`,
		"fallback": "uix:parquet-floor",
	});
}

export default Component;
