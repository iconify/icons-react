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

.kf8s_phmr {
  d: path("M12 21.25A9.25 9.25 0 1 1 21.25 12M12 6.75V12");
}

.kwsh3kbkk {
  d: path("M17.5 13.75a2.75 2.75 0 0 0 3.75 3.75a3.75 3.75 0 1 1-3.75-3.75");
}
</style><g class="hntgybcog"><path class="kf8s_phmr"/><path class="kwsh3kbkk"/></g>`,
		"fallback": "iconoven:midnight",
	});
}

export default Component;
