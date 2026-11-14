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
		"content": `<style>.g2fz9pc-n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9.25l4.5-4.5l4.5 4.5l4.5-4.5l4.5 4.5m-18 5l4.5-4.5l4.5 4.5l4.5-4.5l4.5 4.5m-18 5l4.5-4.5l4.5 4.5l4.5-4.5l4.5 4.5m-18-10v10m4.5-14.5v10m4.5-5.5v10m4.5-14.5v10m4.5-5.5v10");
}
</style><path class="g2fz9pc-n"/>`,
		"fallback": "uix-sharp:parquet-floor",
	});
}

export default Component;
