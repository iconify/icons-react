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
		"content": `<style>.lo_lt5b5d {
  width: 18.5px;
  height: 14.5px;
  x: 2.75px;
  y: 4.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.pd_75gyzc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 10.25V8h2.25m5.5 0H17v2.25m0 3.5V16h-2.25m-5.5 0H7v-2.25");
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="lo_lt5b5d"/><path class="pd_75gyzc"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:metering-mode",
	});
}

export default Component;
