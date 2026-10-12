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
		"content": `<style>.naehwoblf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 7.5H7.5a4.5 4.5 0 0 0 0 9h1.75m5.5-9h1.75a4.5 4.5 0 0 1 0 9h-1.75m-6-4.5h6.5");
}
</style><path class="naehwoblf"/>`,
		"fallback": "iconoven:link",
	});
}

export default Component;
