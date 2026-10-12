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
		"content": `<style>.hx0v9acei {
  d: path("M4.5 19.75V11.5l1.1-1.02l5.3-4.96L12 4.5l1.1 1.02l5.3 4.96l1.1 1.02v9.75h-15z");
}

.paf4ywbwv {
  d: path("m13.94 6.31l4.12 3.85l.44.41l.41-.44l1.23-1.31l.41-.44l-.44-.41l-4.12-3.85l-.44-.41l-.41.44l-1.23 1.31l-.41.44zM16 8.23l2.05-2.19M10 21.25v-5.5h4v5.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hx0v9acei"/><path class="paf4ywbwv"/></g>`,
		"fallback": "iconoven:solar-home-sharp",
	});
}

export default Component;
