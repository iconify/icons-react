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
		"content": `<style>.dhq6x7b2q {
  d: path("m12 9.5l.3 2.2l2.2.3l-2.2.3l-.3 2.2l-.3-2.2l-2.2-.3l2.2-.3z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xt03-b41p {
  d: path("m3.69 4.67l3.87-1.34L8.5 3l.96.27l5.08 1.46l.96.27l.94-.33l3.87-1.34l.94-.33v16l-.94.33l-3.87 1.34l-.94.33l-.96-.27l-5.08-1.46L8.5 19l-.94.33l-3.87 1.34l-.94.33V5zM8.5 5v4m0 6v2.5m7-10.5v2m0 6v4");
}
</style><g class="x2cwu0gfd"><path class="xt03-b41p"/><path class="dhq6x7b2q"/></g>`,
		"fallback": "iconoven:star-map-sharp",
	});
}

export default Component;
