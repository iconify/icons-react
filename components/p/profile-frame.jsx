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

.kki2euvai {
  d: path("M8.75 9.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M6.25 19.5C7.5 16.75 9.5 15.25 12 15.25s4.5 1.5 5.75 4.25");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="kki2euvai"/></g>`,
		"fallback": "uix:profile-frame",
	});
}

export default Component;
