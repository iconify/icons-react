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
		"content": `<style>.kzvghobak {
  d: path("M9 10.25v-3L12 5l3 2.25v3Zm-1 3.5h8m-8 4l1.313-2.187l.437 2.187l.363 1.813L11.5 17.25l.911-1.518L13 17.5h3");
}

.mqkg9kykg {
  d: path("M4.25 2.75h15.5v18.5H4.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mqkg9kykg"/><path class="kzvghobak"/></g>`,
		"fallback": "iconoven:rent-agreement-sharp",
	});
}

export default Component;
