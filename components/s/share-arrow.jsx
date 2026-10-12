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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i2799mjyd {
  cx: 17.5px;
  cy: 18.5px;
  r: 2.5px;
}

.nh_j4ibuz {
  d: path("m9.3 10.35l5.4-3.2m-5.4 6.5l5.4 3.2");
}

.tqj6lmj3z {
  cx: 17.5px;
  cy: 5.5px;
  r: 2.5px;
}

.y56pw2b3p {
  cx: 6.5px;
  cy: 12px;
  r: 2.5px;
}
</style><g class="hntgybcog"><circle class="tqj6lmj3z"/><circle class="y56pw2b3p"/><circle class="i2799mjyd"/><path class="nh_j4ibuz"/></g>`,
		"fallback": "iconoven:share-arrow",
	});
}

export default Component;
