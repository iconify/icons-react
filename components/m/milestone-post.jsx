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
		"content": `<style>.a_-q_pb0z {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 3px;
}

.h5xgiv5jo {
  d: path("M8 17.5V7m.5-.5h7.25q.5 0 .17.37l-1.34 1.51q-.33.37 0 .74l1.34 1.51q.33.37-.17.37H8.5q-.5 0-.5-.5V7q0-.5.5-.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><path class="h5xgiv5jo"/></g>`,
		"fallback": "iconoven:milestone-post",
	});
}

export default Component;
