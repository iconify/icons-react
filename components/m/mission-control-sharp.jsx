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
		"content": `<style>.d6fbly8nu {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.75 7.25h.01");
}

.e-j0bqyrj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3h18.5v11.25H2.75z");
}

.q_--6vbma {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 11c2-3.25 5.5-4.75 10-4.25");
}

.r1ig1xl0h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 15v2m-6.75.75h14.5l.39.92l.72 1.66l.39.92H2.75l.39-.92l.72-1.66l.39-.92z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="e-j0bqyrj"/><path class="q_--6vbma"/><path class="d6fbly8nu"/><path class="r1ig1xl0h"/></g>`,
		"fallback": "iconoven:mission-control-sharp",
	});
}

export default Component;
