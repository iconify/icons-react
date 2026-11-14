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

.q7enn2bcj {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 16.125v-8.25A4.375 4.375 0 0 1 6.875 3.5M12 3.5v17m0-8.5h9.5");
}

.s4-_4xbpk {
  d: path("M5.5 9.5L8 12l-2.5 2.5");
}
</style><g class="hntgybcog"><path class="q7enn2bcj"/><path class="s4-_4xbpk"/></g>`,
		"fallback": "uix:tmux",
	});
}

export default Component;
