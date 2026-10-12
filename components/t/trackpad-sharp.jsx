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
		"content": `<style>.l7yfq-b6e {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h18.5v16.5H2.75z");
}

.o6hs5du5w {
  cx: 12px;
  cy: 10px;
  r: 3px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.utuz09bqr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 16h18.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.wcpvigl8r {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 10h.01");
}
</style><g class="ux2u0rbkq"><path class="l7yfq-b6e"/><circle class="o6hs5du5w"/><path class="wcpvigl8r"/><path class="utuz09bqr"/></g>`,
		"fallback": "iconoven:trackpad-sharp",
	});
}

export default Component;
