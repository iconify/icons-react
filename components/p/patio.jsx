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
		"content": `<style>.lwvd4bbbn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5C5 4 19 4 21.5 8.5Zm9.5 0v13m-7-6h14m-11.5 0v6m9-6v6");
}
</style><path class="lwvd4bbbn"/>`,
		"fallback": "uix:patio",
	});
}

export default Component;
