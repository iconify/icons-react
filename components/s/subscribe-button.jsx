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

.nk73kvqig {
  d: path("M7.25 10v4m-2-2h4m2-1.25h6.5m-6.5 2.5h4");
}

.sr_0fj4cl {
  width: 18.5px;
  height: 10px;
  x: 2.75px;
  y: 7px;
  rx: 5px;
}
</style><g class="hntgybcog"><rect class="sr_0fj4cl"/><path class="nk73kvqig"/></g>`,
		"fallback": "iconoven:subscribe-button",
	});
}

export default Component;
