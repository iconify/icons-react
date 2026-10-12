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
		"content": `<style>.bgt9f0b2v {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 20.75q4-9.75 15.25-16.5");
}

.fkc1fublc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.5 17.5h.01m2.74-2.25h.01");
}

.h6n97vctg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.86 13.43q2.53-2.97-.85-4.93q-2.53 2.98.85 4.93Z");
}

.oth7u-bfl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.02 8.27q1.98 3.36 4.93.8q-1.98-3.36-4.93-.8Z");
}

.r73siqsxk {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.86 13.43q2.62 2.89 5-.21q-2.63-2.89-5 .21Zm5.16-5.16q3.08-2.41.16-5q-3.08 2.4-.16 5Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="bgt9f0b2v"/><path class="h6n97vctg"/><path class="r73siqsxk"/><path class="oth7u-bfl"/><path class="fkc1fublc"/></g>`,
		"fallback": "iconoven:olive-branch-peace-sharp",
	});
}

export default Component;
