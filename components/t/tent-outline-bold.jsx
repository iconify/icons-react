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
		"content": `<style>.hc7fbd-jo {
  d: path("M4 19h16");
}

.i6clenrss {
  d: path("M2 16 12 6l10 10Z");
}

.lf2ilxqms {
  d: path("m12 11 5 5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vqy-3paam {
  d: path("m12 11 -5 5");
}
</style><g class="s0phu2bbs"><path class="i6clenrss"/><path class="vqy-3paam"/><path class="lf2ilxqms"/><path class="hc7fbd-jo"/></g>`,
		"fallback": "iconmind:tent-outline-bold",
	});
}

export default Component;
