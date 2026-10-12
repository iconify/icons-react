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
		"content": `<style>.e4t5c-bfl {
  width: 12.5px;
  height: 13px;
  x: 3.25px;
  y: 8.25px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lti27_b4l {
  d: path("M7 14.75h5m3.58-8.97a3.25 3.25 0 0 1 2.64 2.64M16.1 2.83a6.25 6.25 0 0 1 5.07 5.07");
}

.wrndufb6n {
  width: 5px;
  height: 7px;
  x: 7px;
  y: 11.25px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="e4t5c-bfl"/><rect class="wrndufb6n"/><path class="lti27_b4l"/></g>`,
		"fallback": "iconoven:smart-switch",
	});
}

export default Component;
