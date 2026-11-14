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
		"content": `<style>.usq0-qrre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3C6 3 5.5 4 5.5 6v3.5C5.5 11 4.75 12 3 12c1.75 0 2.5 1 2.5 2.5V18c0 2 .5 3 2.5 3m8-18c2 0 2.5 1 2.5 3v3.5c0 1.5.75 2.5 2.5 2.5c-1.75 0-2.5 1-2.5 2.5V18c0 2-.5 3-2.5 3M9.5 9.5h5m-5 5h3");
}
</style><path class="usq0-qrre"/>`,
		"fallback": "uix-sharp:scope",
	});
}

export default Component;
