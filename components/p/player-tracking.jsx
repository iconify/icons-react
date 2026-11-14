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
		"content": `<style>.a2yyomfcq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM3 20.5c0-4 3.5-6.5 8-6.5c.933 0 1.823.107 2.647.313M18.5 21.75C16.75 20 15.75 18.5 15.75 17a2.75 2.75 0 0 1 5.5 0c0 1.5-1 3-2.75 4.75Z");
}
</style><path class="a2yyomfcq"/>`,
		"fallback": "uix-sharp:player-tracking",
	});
}

export default Component;
