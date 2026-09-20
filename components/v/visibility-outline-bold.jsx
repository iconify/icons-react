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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.irm-6r_xs {
  d: path("M3 17v4");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.rp243mbkd {
  d: path("M6.36 9.95a6 6 0 0 1 11.28 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uzi41e83o {
  d: path("M21 17v4");
}
</style><g class="s0phu2bbs"><path class="rp243mbkd"/><path class="bo51iypxr"/><path class="rkhcgsbdl"/><path class="irm-6r_xs"/><path class="uzi41e83o"/></g>`,
		"fallback": "iconmind:visibility-outline-bold",
	});
}

export default Component;
