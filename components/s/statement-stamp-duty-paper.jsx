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
		"content": `<style>.ra9ls85sm {
  d: path("M4.5 2.5h15v19h-15Zm7 3h1m1 0h1m1 0h1m0 1v1m0 1v1");
}

.sa7b6bcxs {
  d: path("M16.5 10.5v.5H16m-1 0h-1m-1 0h-1m-.5-.5v-1m0-1v-1m0-1v-1m-4 1H9m-1.5 8h9m-9 3.5H13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ra9ls85sm"/><path class="sa7b6bcxs"/></g>`,
		"fallback": "uix-sharp:statement-stamp-duty-paper",
	});
}

export default Component;
