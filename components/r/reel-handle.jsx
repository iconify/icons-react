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
		"content": `<style>.g6qxtyhzs {
  d: path("M8 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.re7wvk0gg {
  d: path("M2.5 14a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Zm9-1.5L18 6m-.5-1a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM10 6.5v-3m-4 0h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="re7wvk0gg"/><path class="g6qxtyhzs"/></g>`,
		"fallback": "uix-sharp:reel-handle",
	});
}

export default Component;
