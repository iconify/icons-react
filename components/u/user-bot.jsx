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
		"content": `<style>.fhod3tbev {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 20.25h14a1 1 0 0 0 1-1c0-3.2-3.6-5.25-8-5.25s-8 2.05-8 5.25a1 1 0 0 0 1 1M12 4.5V2.75");
}

.hr580mbmo {
  width: 8.5px;
  height: 7px;
  x: 7.75px;
  y: 4.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.25px;
}

.r4phunq2g {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.25 8h.01m3.49 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="hr580mbmo"/><path class="fhod3tbev"/><path class="r4phunq2g"/></g>`,
		"fallback": "iconoven:user-bot",
	});
}

export default Component;
