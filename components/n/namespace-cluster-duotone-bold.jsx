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
		"content": `<style>.b3s4djbny {
  d: path("M4 5h16");
}

.kk9_yabca {
  d: path("M2 11a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.n3jytwfsf {
  d: path("M14 11a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.ncw_4xbrl {
  fill: currentColor;
  d: path("M14 11a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nidt87b-x {
  fill: currentColor;
  d: path("M2 11a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="nidt87b-x"/><path class="ncw_4xbrl"/><path class="b3s4djbny"/><path class="kk9_yabca"/><path class="n3jytwfsf"/></g>`,
		"fallback": "iconmind:namespace-cluster-duotone-bold",
	});
}

export default Component;
