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
		"content": `<style>.ox05rfewb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75h18.5v14.5H2.75z");
}

.pd_75gyzc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 10.25V8h2.25m5.5 0H17v2.25m0 3.5V16h-2.25m-5.5 0H7v-2.25");
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="ox05rfewb"/><path class="pd_75gyzc"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:metering-mode-sharp",
	});
}

export default Component;
