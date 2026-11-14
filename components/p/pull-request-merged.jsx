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
		"content": `<style>.acgstmblx {
  d: path("M4 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x20tjz0vx {
  d: path("M6 6.5c0 3.5 6 3 6 6.5m6-6.5c0 3.5-6 3-6 6.5m0 0v4.5m-2 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="acgstmblx"/><path class="x20tjz0vx"/></g>`,
		"fallback": "uix-sharp:pull-request-merged",
	});
}

export default Component;
