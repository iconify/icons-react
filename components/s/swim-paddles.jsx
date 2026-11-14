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
		"content": `<style>.pq5xezbds {
  d: path("M3 3.5h7.5L9 17.5H4.5Zm10.5 0H21l-1.5 14H15Z");
}

.q24-p2btr {
  d: path("M6.75 15.25a2.25 2.25 0 0 1 0 4.5m10.5-4.5a2.25 2.25 0 0 1 0 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pq5xezbds"/><path class="q24-p2btr"/></g>`,
		"fallback": "uix-sharp:swim-paddles",
	});
}

export default Component;
