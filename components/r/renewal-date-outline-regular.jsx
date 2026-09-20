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
		"content": `<style>.a3uctlbmc {
  d: path("m12.5 13 2.5 2.5 -2.5 2.5");
}

.j6apg33fy {
  d: path("M16 2.5V5");
}

.jde8y7ufk {
  d: path("m8 13 2.5 2.5L8 18");
}

.jrpnc2pnl {
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qaa4bo00g {
  d: path("M8 2.5V5");
}

.x50q_4bdr {
  d: path("M3 10h18");
}
</style><g class="nrj6p8qat"><path class="jrpnc2pnl"/><path class="x50q_4bdr"/><path class="qaa4bo00g"/><path class="j6apg33fy"/><path class="jde8y7ufk"/><path class="a3uctlbmc"/></g>`,
		"fallback": "iconmind:renewal-date-outline-regular",
	});
}

export default Component;
