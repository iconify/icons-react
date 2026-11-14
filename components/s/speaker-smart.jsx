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
		"content": `<style>.z-a_1k4oj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3h7a3 3 0 0 1 3 3v12.5a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm-3 5.5h13M9 13h6m-6 3.5h6");
}
</style><path class="z-a_1k4oj"/>`,
		"fallback": "uix-sharp:speaker-smart",
	});
}

export default Component;
