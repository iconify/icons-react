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
		"content": `<style>.c-bzonblr {
  d: path("M2 14.5A2.5 2.5 0 0 1 4.5 12h11a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5");
}

.dr1q0bzhj {
  fill: currentColor;
  d: path("M2 14.5A2.5 2.5 0 0 1 4.5 12h11a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kqaa63eeo {
  d: path("M6 6.5A2.5 2.5 0 0 1 8.5 4h11A2.5 2.5 0 0 1 22 6.5 2.5 2.5 0 0 1 19.5 9h-11A2.5 2.5 0 0 1 6 6.5");
}

.qjs6_4bst {
  fill: currentColor;
  d: path("M6 6.5A2.5 2.5 0 0 1 8.5 4h11A2.5 2.5 0 0 1 22 6.5 2.5 2.5 0 0 1 19.5 9h-11A2.5 2.5 0 0 1 6 6.5");
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
</style><g class="s0phu2bbs"><path class="dr1q0bzhj"/><path class="qjs6_4bst"/><path class="c-bzonblr"/><path class="kqaa63eeo"/></g>`,
		"fallback": "iconmind:toast-stack-duotone-bold",
	});
}

export default Component;
