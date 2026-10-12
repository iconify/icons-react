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
		"content": `<style>.bfv48acnr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.53 3.79l4.69 3.92L19.75 9l-1.05 1.7l-5.65 9.1L12 21.5l-1.05-1.7l-5.65-9.1L4.25 9l1.53-1.29l4.69-3.92L12 2.5z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.zrnuaslnh {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 10.5h.01");
}
</style><g class="ux2u0rbkq"><path class="bfv48acnr"/><path class="zrnuaslnh"/></g>`,
		"fallback": "iconoven:kite-shape-sharp",
	});
}

export default Component;
