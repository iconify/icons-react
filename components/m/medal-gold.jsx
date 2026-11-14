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
		"content": `<style>.o-o9zybvr {
  d: path("M5.5 15a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}

.s_fyfrd4p {
  d: path("M8.25 9.75L5 2.5h4.75L12 5.75l2.25-3.25H19l-3.25 7.25M12 11.25l1 2.5h2.5l-2 1.75l.75 2.5L12 16.5L9.75 18l.75-2.5l-2-1.75H11Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o-o9zybvr"/><path class="s_fyfrd4p"/></g>`,
		"fallback": "uix-sharp:medal-gold",
	});
}

export default Component;
