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
		"content": `<style>.zmxvhubnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19v7h-19Zm0 3h19M6 12v5.5L8 19l2-1.5l2 1.5l2-1.5l2 1.5l2-1.5V12");
}
</style><path class="zmxvhubnu"/>`,
		"fallback": "uix-sharp:kitchen-foil-box",
	});
}

export default Component;
