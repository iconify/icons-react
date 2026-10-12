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
		"content": `<style>.c8ankl6hl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12.75v5.5h4.25m0-5h8v8h-8z");
}

.j24_5sbhb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 7.75h.01m4.49 0h.01");
}

.l2m9qfpvx {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.75 17.25h.01m2.99 0h.01");
}

.qwn7iwbtj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h12.5v10H2.75z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="qwn7iwbtj"/><path class="j24_5sbhb"/><path class="c8ankl6hl"/><path class="l2m9qfpvx"/></g>`,
		"fallback": "iconoven:sub-agent-sharp",
	});
}

export default Component;
