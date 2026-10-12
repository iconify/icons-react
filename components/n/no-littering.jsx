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
		"content": `<style>.btebm7bgg {
  width: 3.5px;
  height: 3.5px;
  x: 3px;
  y: 10px;
  rx: 0.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.njqu9ybef {
  d: path("M3 16.5h9m-8 0L5 21h5l1-4.5M3.75 3.75l16.5 16.5");
}
</style><g class="hntgybcog"><rect class="btebm7bgg"/><path class="njqu9ybef"/></g>`,
		"fallback": "iconoven:no-littering",
	});
}

export default Component;
