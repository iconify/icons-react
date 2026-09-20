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
		"content": `<style>.bv0-fcbtg {
  d: path("M5 6h5v5h5v5h4");
}

.e5rxwxb6q {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}

.yvcffl9jx {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 6h5v5h5v5h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="e5rxwxb6q"/><path class="yvcffl9jx"/><path class="qe97cg-lx"/><path class="bv0-fcbtg"/></g>`,
		"fallback": "iconmind:lr-schedule-duotone-thin",
	});
}

export default Component;
