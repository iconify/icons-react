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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kif3ikiir {
  d: path("M11 9h6");
}

.nhj51sbwg {
  d: path("M11 17h6");
}

.wcmt9ejyf {
  d: path("m13 12 3 3");
}

.wuvisubmw {
  d: path("M8 3v18");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="y4_6s7b5v"/><path class="wuvisubmw"/><path class="kif3ikiir"/><path class="wcmt9ejyf"/><path class="nhj51sbwg"/></g>`,
		"fallback": "iconmind:thesaurus-outline-thin",
	});
}

export default Component;
