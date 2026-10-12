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
		"content": `<style>.dt7gqnbzc {
  d: path("M7.75 7.25h3v4.5h-3zm1.5 0v-1.5m4.5 3h3v3h-3zm1.5 0v-1.5m-11 7.5h15.5m-3 2.5v1.5");
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
</style><g class="x2cwu0gfd"><path class="mqkg9kykg"/><path class="dt7gqnbzc"/></g>`,
		"fallback": "iconoven:minibar-sharp",
	});
}

export default Component;
