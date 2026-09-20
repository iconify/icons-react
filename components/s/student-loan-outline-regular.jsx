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
		"content": `<style>.jvc5rrr1z {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.jzi8j7bqk {
  d: path("m10 16 -3 3 3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r1ix196dy {
  d: path("M9 10.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.wuk2mlziz {
  d: path("M7 19h10");
}
</style><g class="nrj6p8qat"><path class="jvc5rrr1z"/><path class="r1ix196dy"/><path class="wuk2mlziz"/><path class="jzi8j7bqk"/></g>`,
		"fallback": "iconmind:student-loan-outline-regular",
	});
}

export default Component;
