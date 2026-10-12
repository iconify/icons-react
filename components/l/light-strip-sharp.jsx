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
		"content": `<style>.gcnz8umfe {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9.75v-2.5m5 2.5v-3.5m5 3.5v-2.5");
}

.onp92xb9c {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12.75h18.5v5H2.75z");
}

.p4sy_hbre {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 15.25h.01m4.99 0h.01m4.99 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="onp92xb9c"/><path class="p4sy_hbre"/><path class="gcnz8umfe"/></g>`,
		"fallback": "iconoven:light-strip-sharp",
	});
}

export default Component;
