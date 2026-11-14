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
		"content": `<style>.b_s02nr4q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h18v6H3Zm9 0v6M5.5 6c0-4.5 13-4.5 13 0m-13 12c0 4.5 13 4.5 13 0");
}
</style><path class="b_s02nr4q"/>`,
		"fallback": "uix-sharp:magnet-bar-field",
	});
}

export default Component;
