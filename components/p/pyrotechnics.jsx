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
		"content": `<style>.i8h54ybiv {
  d: path("M8 16.5V20a4 1.5 0 0 0 8 0v-3.5m-4-5v-9M10 12L5 5m9 7l5-7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xbotjmm7v {
  d: path("M8 16.5a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0Z");
}
</style><g class="ulnmmdpxh"><path class="xbotjmm7v"/><path class="i8h54ybiv"/></g>`,
		"fallback": "uix-sharp:pyrotechnics",
	});
}

export default Component;
