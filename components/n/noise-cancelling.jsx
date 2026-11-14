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

.vs88r7fwh {
  d: path("M7 20v1H3.5v-7.5H7v4.7m10-4.7h3.5V21H17Zm-7 5l4-7");
}

.vvgcjrlwh {
  d: path("M3.5 16v-4a8.5 8.5 0 0 1 17 0v4");
}
</style><g class="ulnmmdpxh"><path class="vvgcjrlwh"/><path class="vs88r7fwh"/></g>`,
		"fallback": "uix-sharp:noise-cancelling",
	});
}

export default Component;
