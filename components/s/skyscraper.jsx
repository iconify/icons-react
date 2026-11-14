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
		"content": `<style>.uciwb4jnt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21V6l4-3.5L16 6v15M11 9h2m-2 3.5h2M11 16h2m-8 5h14");
}
</style><path class="uciwb4jnt"/>`,
		"fallback": "uix:skyscraper",
	});
}

export default Component;
