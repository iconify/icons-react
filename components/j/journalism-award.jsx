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
		"content": `<style>.grvyc2b8q {
  d: path("M7 5.5H5.5a2.5 2.5 0 0 0 0 5h1.75m9.75-5h1.5a2.5 2.5 0 0 1 0 5h-1.75m-4.75 3V18m-2.75 0h5.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75h-5.5a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 9.25 18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pfzd08f0w {
  d: path("M7 3.5h10v5a5 5 0 0 1-10 0Z");
}
</style><g class="hntgybcog"><path class="pfzd08f0w"/><path class="grvyc2b8q"/></g>`,
		"fallback": "uix:journalism-award",
	});
}

export default Component;
