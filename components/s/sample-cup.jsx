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
		"content": `<style>.gacmwtkut {
  width: 13.5px;
  height: 3.75px;
  x: 5.25px;
  y: 2.75px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zuyu89yej {
  d: path("M6.25 6.5h11.5l-1 12.75a2 2 0 0 1-2 1.75h-5.5a2 2 0 0 1-2-1.75Zm2.75 5h6m-6 3h4");
}
</style><g class="hntgybcog"><rect class="gacmwtkut"/><path class="zuyu89yej"/></g>`,
		"fallback": "iconoven:sample-cup",
	});
}

export default Component;
