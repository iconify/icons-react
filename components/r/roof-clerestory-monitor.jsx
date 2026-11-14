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
		"content": `<style>.z0jn6ab7a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5L8 9h8l5.5 3.5m-11.75-8h4.5A1.75 1.75 0 0 1 16 6.25v1A1.75 1.75 0 0 1 14.25 9h-4.5A1.75 1.75 0 0 1 8 7.25v-1A1.75 1.75 0 0 1 9.75 4.5M4.5 13.75V20h15v-6.25M12 4.5V9");
}
</style><path class="z0jn6ab7a"/>`,
		"fallback": "uix:roof-clerestory-monitor",
	});
}

export default Component;
