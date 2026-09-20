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
		"content": `<style>.b-pphqpeq {
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.dhnofza7v {
  fill: currentColor;
  d: path("M10 9.5a3.5 1.5 0 0 1 7 0v6a3.5 1.5 0 0 1 -7 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.j_w0smilt {
  d: path("M10 9.5a3.5 1.5 0 0 1 7 0v6a3.5 1.5 0 0 1 -7 0Z");
}

.okqi2lbic {
  fill: currentColor;
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
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

.sfnyx4wnk {
  d: path("M6 6v14");
}
</style><g class="s0phu2bbs"><path class="okqi2lbic"/><path class="dhnofza7v"/><path class="b-pphqpeq"/><path class="sfnyx4wnk"/><path class="j_w0smilt"/></g>`,
		"fallback": "iconmind:volume-mount-duotone-bold",
	});
}

export default Component;
