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

.wrcg6qhaf {
  d: path("M2.5 4.5h19v15h-19Z");
}

.ys8tg3bib {
  d: path("M9.25 9.25h5.5v5.5h-5.5ZM12 12h.01M12 4.5v4.75m0 5.5v4.75M2.5 12h6.75m5.5 0h6.75");
}
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="ys8tg3bib"/></g>`,
		"fallback": "uix-sharp:spider-wrap",
	});
}

export default Component;
