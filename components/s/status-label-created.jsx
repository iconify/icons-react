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
		"content": `<style>.ljoshbbnu {
  d: path("M2.5 12L8 6h13v12H8Zm5 0h.01");
}

.s6krrlqxp {
  d: path("m11.5 12l2.5 2.5l4-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ljoshbbnu"/><path class="s6krrlqxp"/></g>`,
		"fallback": "uix-sharp:status-label-created",
	});
}

export default Component;
