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
		"content": `<style>.a4j1n1b5k {
  d: path("M12.213 12.147C11.944 11.455 11.358 11 10.5 11c-1 0-1.75.6-1.75 1.5c0 1.75 3.5 1 3.5 3c0 .9-.75 1.5-1.75 1.5s-1.6-.5-1.75-1.25M10.5 10v1m0 6v1m4.5-4.25h6v8h-6Zm3 2.75h.01M18 19.25h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wg5on4b5m {
  d: path("M19.487 10.967C18.541 9.403 17.096 7.897 15 6.5H9c-4.5 3-6 6.5-6 10c0 3 2 5 5 5h4.229M9 6.5L7 3h10l-2 3.5");
}
</style><g class="ulnmmdpxh"><path class="wg5on4b5m"/><path class="a4j1n1b5k"/></g>`,
		"fallback": "uix-sharp:reserve-fund",
	});
}

export default Component;
