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
		"content": `<style>.my9fv2p5r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.222 13.791L19.75 4.75L15.5 3C15 4.75 13.75 5.75 12 5.75S9 4.75 8.5 3L4.25 4.75L2.5 15.5h3.25L7 10v11h6.122M17 12.378V10l.515 2.264M18 15v6m-2.5-4.5l5 3m-5 0l5-3");
}
</style><path class="my9fv2p5r"/>`,
		"fallback": "uix:thermal-underwear",
	});
}

export default Component;
