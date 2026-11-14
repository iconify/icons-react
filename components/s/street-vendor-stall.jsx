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
		"content": `<style>.xt2ig9weg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9l2.5-5.5h13L21 9M3 9a2.25 2.25 0 0 0 4.5 0A2.25 2.25 0 0 0 12 9a2.25 2.25 0 0 0 4.5 0A2.25 2.25 0 0 0 21 9M5 12v9m14-9v9M3 16h18");
}
</style><path class="xt2ig9weg"/>`,
		"fallback": "uix-sharp:street-vendor-stall",
	});
}

export default Component;
