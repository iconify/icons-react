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
		"content": `<style>.luxswbbel {
  d: path("M3.5 2.5h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1Z");
}

.t2jin0a_j {
  d: path("M21.5 6.5v12a3 3 0 0 1-3 3h-12m0-11a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="luxswbbel"/><path class="t2jin0a_j"/></g>`,
		"fallback": "uix-sharp:spatial-widget",
	});
}

export default Component;
