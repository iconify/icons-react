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
		"content": `<style>.b3m0zivom {
  d: path("M12 6a6 6 0 1 1 0 12a6 6 0 0 1 0-12m8.9 7.33a9 9 0 0 1-1.67 4.02m-1.88 1.88a9 9 0 0 1-4.02 1.67m-2.66 0a9 9 0 0 1-4.02-1.67m-1.88-1.88a9 9 0 0 1-1.67-4.02m0-2.66a9 9 0 0 1 1.67-4.02m1.88-1.88a9 9 0 0 1 4.02-1.67m2.66 0a9 9 0 0 1 4.02 1.67m1.88 1.88a9 9 0 0 1 1.67 4.02");
}

.e-2-i017w {
  cx: 12px;
  cy: 12px;
  r: 2.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="e-2-i017w"/><path class="b3m0zivom"/></g>`,
		"fallback": "iconoven:live-photo",
	});
}

export default Component;
