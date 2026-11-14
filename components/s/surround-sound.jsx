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

.inrj4d9ip {
  d: path("M19.75 7.5a9 9 0 0 1 0 9m-3.25 3.25a9 9 0 0 1-9 0M4.25 16.5a9 9 0 0 1 0-9M7.5 4.25a9 9 0 0 1 9 0m.25 5a5.5 5.5 0 0 1 0 5.5m-2 2a5.5 5.5 0 0 1-5.5 0m-2-2a5.5 5.5 0 0 1 0-5.5m2-2a5.5 5.5 0 0 1 5.5 0");
}

.k72lg3a1g {
  fill: currentColor;
  d: path("M10.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="inrj4d9ip"/><path class="k72lg3a1g"/></g>`,
		"fallback": "uix:surround-sound",
	});
}

export default Component;
