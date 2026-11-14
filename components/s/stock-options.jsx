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
		"content": `<style>.ds5bd_9cz {
  d: path("m5.5 17.5l4-4l3 2l3.75-6.25m-.75-2.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM18.25 6v1.5");
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qe97cg-lx"/><path class="ds5bd_9cz"/></g>`,
		"fallback": "uix-sharp:stock-options",
	});
}

export default Component;
