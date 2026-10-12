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
		"content": `<style>.fhr6rlpil {
  d: path("M4.75 11.75a7.25 7.25 0 0 1 14.5 0c0 .7-.55 1.25-1.25 1.25H6c-.7 0-1.25-.55-1.25-1.25m3.25 4c-.75 1.5.75 2.5 0 4m4-4c-.75 1.75.75 3 0 5.25m4-5.25c-.75 1.5.75 2.5 0 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w9o4yxbpx {
  d: path("M8.25 9.5A4 4 0 0 1 11 7");
}
</style><g class="hntgybcog"><path class="fhr6rlpil"/><path class="w9o4yxbpx"/></g>`,
		"fallback": "iconoven:jellyfish",
	});
}

export default Component;
