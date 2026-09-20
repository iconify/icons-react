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
		"content": `<style>.j33qrnb7r {
  d: path("M10 11c0 -6 7 -6 7 0");
}

.jd882cb_k {
  d: path("m4 16 5 -5h9v5Z");
}

.nq0_nyzpb {
  d: path("M4 19h14");
}

.o4tqyhbip {
  fill: currentColor;
  d: path("m4 16 5 -5h9v5Z");
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
</style><g class="s0phu2bbs"><path class="o4tqyhbip"/><path class="jd882cb_k"/><path class="j33qrnb7r"/><path class="nq0_nyzpb"/></g>`,
		"fallback": "iconmind:iron-duotone-bold",
	});
}

export default Component;
