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
		"content": `<style>.dl96t4b3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 18a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m13 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-8.5 0h8.5m2.25 0l-2-14M14 4h5M5.75 3L8.5 4v2c0 1.6-1.1 2.5-2.75 3.25C4.1 8.5 3 7.6 3 6V4Z");
}
</style><path class="dl96t4b3g"/>`,
		"fallback": "uix:scooter-insurance",
	});
}

export default Component;
