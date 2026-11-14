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
		"content": `<style>.vzpu14xlu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3v6.25a6.5 6.5 0 1 0 4 0V3M8.5 3h7M6.25 15.5h11.5");
}
</style><path class="vzpu14xlu"/>`,
		"fallback": "uix-sharp:round-bottom-flask",
	});
}

export default Component;
