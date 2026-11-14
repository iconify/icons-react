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
		"content": `<style>.d8wvj4lrf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21.5l4.5-19m13.5 19l-4.5-19M12 20V9m-3.5 3.5L12 9l3.5 3.5");
}
</style><path class="d8wvj4lrf"/>`,
		"fallback": "uix:lane-arrows",
	});
}

export default Component;
