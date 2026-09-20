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
		"content": `<style>.aoxrbobxu {
  d: path("M14 8h4");
}

.j3tm7xb5y {
  d: path("M14 15h4");
}

.p4162b_hg {
  d: path("m6 15 2 2 4 -4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sxexd9boz {
  d: path("m6 8 2 2 4 -4");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="y4_6s7b5v"/><path class="sxexd9boz"/><path class="aoxrbobxu"/><path class="p4162b_hg"/><path class="j3tm7xb5y"/></g>`,
		"fallback": "iconmind:symptom-check-outline-bold",
	});
}

export default Component;
