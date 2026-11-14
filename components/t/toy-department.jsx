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
		"content": `<style>.cozxbcbsz {
  d: path("M7.5 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M6 17.25a6 4.25 0 1 0 12 0a6 4.25 0 1 0-12 0");
}

.fjcpi7b4l {
  d: path("M5.75 4.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m9 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-4.5 3h.01m3.49 0h.01M12 9.75h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cozxbcbsz"/><path class="fjcpi7b4l"/></g>`,
		"fallback": "uix:toy-department",
	});
}

export default Component;
