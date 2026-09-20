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

.iedujiqkb {
  d: path("M7 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.mi_m6achy {
  d: path("m17 9 3 3 -3 3");
}

.pj6ust8ab {
  d: path("M2 10a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="pj6ust8ab"/><path class="iedujiqkb"/><path class="cfyvl-o0i"/><path class="mi_m6achy"/></g>`,
		"fallback": "iconmind:trigger-manual-outline-bold",
	});
}

export default Component;
