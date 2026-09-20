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
		"content": `<style>.b_fzcqbeu {
  d: path("M5 20a7 7 0 0 1 14 0");
}

.ha96dokbt {
  d: path("M5.5 7H8");
}

.nqq-ml3sz {
  d: path("M16 7h2.5");
}

.rdx3slmde {
  d: path("M8.5 7a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ui32hib9b {
  d: path("M5 20h14");
}
</style><g class="s0phu2bbs"><path class="rdx3slmde"/><path class="ha96dokbt"/><path class="nqq-ml3sz"/><path class="b_fzcqbeu"/><path class="ui32hib9b"/></g>`,
		"fallback": "iconmind:sunburn-risk-outline-bold",
	});
}

export default Component;
