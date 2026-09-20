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
		"content": `<style>.q4bb_8bsv {
  d: path("M21.5 9.5 19 12l2.5 2.5");
}

.rmg235bpl {
  d: path("M2.5 9.5 5 12l-2.5 2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vj0y8fbql {
  d: path("M6 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="vj0y8fbql"/><path class="rmg235bpl"/><path class="q4bb_8bsv"/></g>`,
		"fallback": "iconmind:rightsizing-outline-bold",
	});
}

export default Component;
