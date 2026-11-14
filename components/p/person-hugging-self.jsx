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
		"content": `<style>.he9zuszco {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 6a3 3 0 1 0 6 0a3 3 0 1 0-6 0M5 21.5V17c0-3 3-5 7-5s7 2 7 5v4.5M8.5 15l7 5m0-5l-7 5");
}
</style><path class="he9zuszco"/>`,
		"fallback": "uix:person-hugging-self",
	});
}

export default Component;
