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
		"content": `<style>.bqwkwc6om {
  d: path("M7.25 12v-.25a2 2 0 0 1 2-2h7m-1.75-2l1.75 2l-1.75 2m2.25.25v.25a2 2 0 0 1-2 2h-7m1.75 2l-1.75-2l1.75-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.phjvadcnz {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 3px;
}
</style><g class="hntgybcog"><rect class="phjvadcnz"/><path class="bqwkwc6om"/></g>`,
		"fallback": "iconoven:repost",
	});
}

export default Component;
