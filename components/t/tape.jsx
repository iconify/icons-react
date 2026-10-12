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
		"content": `<style>.bpdlsnxqj {
  cx: 10.75px;
  cy: 10.25px;
  r: 7.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.leyfmeqwa {
  d: path("M13.75 10.25a3 3 0 1 1-6 0a3 3 0 1 1 6 0m-3 7.5h10.5L20 19.25l1.25 1.5h-10.5Z");
}
</style><g class="hntgybcog"><circle class="bpdlsnxqj"/><path class="leyfmeqwa"/></g>`,
		"fallback": "iconoven:tape",
	});
}

export default Component;
