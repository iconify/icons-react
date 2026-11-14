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
		"content": `<style>.ju0fa5o_y {
  d: path("M15.5 5H20v4.5");
}

.on9s84xmf {
  d: path("M8 21.5V3M4 7l4-4l4 4M8 17.5c0-3 3-3.5 6-6.5l6-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="on9s84xmf"/><path class="ju0fa5o_y"/></g>`,
		"fallback": "uix-sharp:lane-arrow-straight-slight-right",
	});
}

export default Component;
