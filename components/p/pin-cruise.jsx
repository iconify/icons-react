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
		"content": `<style>.iwcd31j7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19L19 19H5Zm5.25-4.5h7.5A1.75 1.75 0 0 1 17 10.25v1A1.75 1.75 0 0 1 15.25 13h-7.5A1.75 1.75 0 0 1 6 11.25v-1A1.75 1.75 0 0 1 7.75 8.5M12 4za1.5 1.5 0 0 1 1.5 1.5V7A1.5 1.5 0 0 1 12 8.5A1.5 1.5 0 0 1 10.5 7V5.5A1.5 1.5 0 0 1 12 4");
}
</style><path class="iwcd31j7t"/>`,
		"fallback": "uix:pin-cruise",
	});
}

export default Component;
