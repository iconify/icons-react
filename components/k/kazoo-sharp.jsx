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
		"content": `<style>.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xofl4wgnc {
  d: path("m3.74 11.11l16.52 1.78l.99.11v3.5l-.99.13l-16.52 2.24l-.99.13v-8z");
}

.ytopibb5c {
  cx: 12px;
  cy: 10px;
  r: 2px;
}
</style><g class="x2cwu0gfd"><path class="xofl4wgnc"/><circle class="ytopibb5c"/></g>`,
		"fallback": "iconoven:kazoo-sharp",
	});
}

export default Component;
