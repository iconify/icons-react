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

.r470zbg-b {
  d: path("M12 21.5S4.5 15 4.5 9.5a7.5 7.5 0 0 1 15 0c0 5.5-7.5 12-7.5 12");
}

.reu4r-43d {
  d: path("M10.5 7.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-1.25 5C9.75 11.5 10.75 11 12 11s2.25.5 2.75 1.75");
}
</style><g class="hntgybcog"><path class="r470zbg-b"/><path class="reu4r-43d"/></g>`,
		"fallback": "uix:map-pin-user",
	});
}

export default Component;
