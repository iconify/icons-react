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
		"content": `<style>.kyk6c_b5e {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.75 14h8.5m-5.75 0v2.75M18.25 14v2.75m3-2.75v3");
}

.qgna_dwcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.75 13h.01");
}

.sshmwcbfg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 17v-6.25l.78-.62l3.44-2.76l.78-.62l.78.62l3.44 2.76l.78.62V18h-10z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="sshmwcbfg"/><path class="qgna_dwcr"/><path class="kyk6c_b5e"/></g>`,
		"fallback": "iconoven:property-key-sharp",
	});
}

export default Component;
