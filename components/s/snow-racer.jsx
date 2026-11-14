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
		"content": `<style>.s1qyimb9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5v4H18M3 18h15.5a2.5 2.5 0 0 0 2.5-2.5m-14.5-2V18m6-4.5V18m3.5-4.5V5m-2.25 0h4.5");
}
</style><path class="s1qyimb9e"/>`,
		"fallback": "uix-sharp:snow-racer",
	});
}

export default Component;
