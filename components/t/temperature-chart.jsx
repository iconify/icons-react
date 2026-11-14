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
		"content": `<style>.tg0coh1ex {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m-2.25 13v-3a1.5 1.5 0 0 1 3 0v3a2.5 2.5 0 1 1-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wc23aqbga {
  d: path("M3.5 3v17.5H13");
}
</style><g class="ulnmmdpxh"><path class="wc23aqbga"/><path class="tg0coh1ex"/></g>`,
		"fallback": "uix-sharp:temperature-chart",
	});
}

export default Component;
