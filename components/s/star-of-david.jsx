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
		"content": `<style>.ai59blwbp {
  d: path("M14.68 7.35L17.37 12l-2.69 4.65H9.32L6.63 12l2.69-4.65Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rhsofabii {
  d: path("m12.3 3.22l2.08 3.61q.3.52.9.52h4.17q.6 0 .3.52l-2.08 3.61q-.3.52 0 1.04l2.08 3.61q.3.52-.3.52h-4.17q-.6 0-.9.52l-2.08 3.61q-.3.52-.6 0l-2.08-3.61q-.3-.52-.9-.52H4.55q-.6 0-.3-.52l2.08-3.61q.3-.52 0-1.04L4.25 7.87q-.3-.52.3-.52h4.17q.6 0 .9-.52l2.08-3.61q.3-.52.6 0");
}
</style><g class="hntgybcog"><path class="rhsofabii"/><path class="ai59blwbp"/></g>`,
		"fallback": "iconoven:star-of-david",
	});
}

export default Component;
