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
		"content": `<style>.tujyujbad {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.43 3.9l1.42 2.97l.43.9l.97-.23l3.2-.74l.98-.22l-.44.9l-1.43 2.95l-.44.9l.78.62l2.58 2.04l.78.62l-.97.22l-3.21.72l-.98.22l.01 1l.01 3.29v1l-.78-.63l-2.56-2.05l-.78-.63l-.78.63l-2.56 2.05l-.78.63v-1l.01-3.29l.01-1l-.98-.22l-3.21-.72l-.97-.22l.78-.62l2.58-2.04l.78-.62l-.44-.9l-1.43-2.95l-.44-.9l.98.22l3.2.74l.97.23l.43-.9l1.42-2.97L12 3z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.vtw80ckxk {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12.5h.01");
}
</style><g class="ux2u0rbkq"><path class="tujyujbad"/><path class="vtw80ckxk"/></g>`,
		"fallback": "iconoven:star-seven-sharp",
	});
}

export default Component;
