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
		"content": `<style>.cid6ynb0y {
  d: path("M8.25 7.5a8 8 0 0 0 7.5 0m-7 4.5h6.5m-6.5 3h6.5m-6.5 3h6.5m4-15.25a3 3 0 0 1 2 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z3wbidffu {
  width: 11.5px;
  height: 16.5px;
  x: 6.25px;
  y: 4.75px;
  rx: 3px;
}
</style><g class="hntgybcog"><rect class="z3wbidffu"/><path class="cid6ynb0y"/></g>`,
		"fallback": "iconoven:smart-speaker",
	});
}

export default Component;
