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
		"content": `<style>.ai8di0ptv {
  d: path("M11.609 19.388L8.5 18.5l-6 2v-15l6-2l7 2l6-2v7.471M8.5 3.5v15m7-13v4.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w70ipcb_g {
  d: path("m14 21l2.5-6l2.5 4.5l2.5-5.5");
}
</style><g class="ulnmmdpxh"><path class="ai8di0ptv"/><path class="w70ipcb_g"/></g>`,
		"fallback": "uix-sharp:map-draw-line",
	});
}

export default Component;
