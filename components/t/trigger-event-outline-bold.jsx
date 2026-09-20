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
		"content": `<style>.cfyvl-o0i {
  d: path("M16 12h4");
}

.dk-6jeb9s {
  d: path("M11.54 8.46a5 5 0 0 1 0 7.08");
}

.mi_m6achy {
  d: path("m17 9 3 3 -3 3");
}

.qm50txban {
  d: path("M13.66 6.34a8 8 0 0 1 0 11.32");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zirb-hbnv {
  d: path("M6 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="zirb-hbnv"/><path class="dk-6jeb9s"/><path class="qm50txban"/><path class="cfyvl-o0i"/><path class="mi_m6achy"/></g>`,
		"fallback": "iconmind:trigger-event-outline-bold",
	});
}

export default Component;
