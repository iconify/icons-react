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
		"content": `<style>.inf4ddb2s {
  cx: 12px;
  cy: 6px;
  r: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m4_8dnm3c {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.25V21m-2-8.75h4m-2 5.25H8.5M12 21H8.5");
}

.o6a500beq {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 6h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="inf4ddb2s"/><path class="o6a500beq"/><path class="m4_8dnm3c"/></g>`,
		"fallback": "iconoven:skeleton-key-sharp",
	});
}

export default Component;
