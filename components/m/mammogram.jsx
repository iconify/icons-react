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
		"content": `<style>.um7_gjp4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.25h16.5m-16.5 11.5h16.5m-16.5-8.5C9 9.25 15.5 9.5 15.5 12S9 14.75 2.75 14.75");
}
</style><path class="um7_gjp4t"/>`,
		"fallback": "iconoven:mammogram",
	});
}

export default Component;
