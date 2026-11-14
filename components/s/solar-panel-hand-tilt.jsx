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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y_upgabkn {
  d: path("M19.75 14.25L18.5 15.5l1.25 1.25");
}

.ywur1wlkd {
  d: path("m3 12l3-9h14l-3 9Zm1.5-4.5h14M13 3l-3 9m0 0v7m-3.5 0h6m3-.5a3 3 0 1 0 3-3");
}
</style><g class="ulnmmdpxh"><path class="ywur1wlkd"/><path class="y_upgabkn"/></g>`,
		"fallback": "uix-sharp:solar-panel-hand-tilt",
	});
}

export default Component;
