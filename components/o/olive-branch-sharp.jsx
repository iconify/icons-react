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
		"content": `<style>.hot64hbwf {
  cx: 17.5px;
  cy: 13.5px;
  r: 2.25px;
}

.rqq77ccwj {
  cx: 12px;
  cy: 18.75px;
  r: 2px;
}

.u30-56bvl {
  d: path("m3.5 20.5l15-15M14 10l2 2m-7 3l1.5 1.75M8 16q.34-4.37-4-5q-.34 4.37 4 5Zm4-4q1.13-4.19-3-5.5q-1.13 4.19 3 5.5Zm4-4q1.43-3.84-2.5-5q-1.43 3.84 2.5 5Zm2.5-2.5q2.89.64 2.25-2.25q-2.89-.64-2.25 2.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="u30-56bvl"/><circle class="hot64hbwf"/><circle class="rqq77ccwj"/></g>`,
		"fallback": "iconoven:olive-branch-sharp",
	});
}

export default Component;
