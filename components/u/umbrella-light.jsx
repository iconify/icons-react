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

.huymlt17p {
  width: 5px;
  height: 3.75px;
  x: 9.5px;
  y: 14.25px;
  rx: 1px;
}

.sdpeuyz2h {
  d: path("M2.75 10.5a9.25 7.75 0 0 1 18.5 0a.75.75 0 0 1-.75.75h-17a.75.75 0 0 1-.75-.75M12 2.75v8.5M7.5 3.9l1.25 7.35M16.5 3.9l-1.25 7.35m-3.25 0v3M12 18v3.25");
}
</style><g class="hntgybcog"><path class="sdpeuyz2h"/><rect class="huymlt17p"/></g>`,
		"fallback": "iconoven:umbrella-light",
	});
}

export default Component;
