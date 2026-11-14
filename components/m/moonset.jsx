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
		"content": `<style>.dilf6qbrm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 16A7 7 0 0 1 13.5 5a6 6 0 0 0-3.25 11M2.5 16h10.25M18 14.5v7m-3-3l3 3l3-3");
}
</style><path class="dilf6qbrm"/>`,
		"fallback": "uix-sharp:moonset",
	});
}

export default Component;
