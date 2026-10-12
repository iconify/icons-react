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
		"content": `<style>.d_bvcslwr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3.5h7.5l-1 3.5c3.25 1 5 3.75 5 7c0 4.25-3.25 7.25-7.75 7.25S4 18.25 4 14c0-3.25 1.75-6 5-7ZM6 12h11.5m.75.75l3-3.25");
}
</style><path class="d_bvcslwr"/>`,
		"fallback": "iconoven:lota",
	});
}

export default Component;
