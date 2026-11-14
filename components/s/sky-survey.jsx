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
		"content": `<style>.h1el86bfr {
  d: path("m7.75 6.25l.013.038a1.5 1.5 0 0 0 .949.949l.038.013a.264.264 0 0 1 0 .5l-.038.013a1.5 1.5 0 0 0-.949.949l-.013.038a.264.264 0 0 1-.5 0l-.013-.038a1.5 1.5 0 0 0-.949-.949L6.25 7.75a.264.264 0 0 1 0-.5l.038-.013a1.5 1.5 0 0 0 .949-.949l.013-.038a.264.264 0 0 1 .5 0m9 9l.013.038a1.5 1.5 0 0 0 .949.949l.038.013a.264.264 0 0 1 0 .5l-.038.013a1.5 1.5 0 0 0-.949.949l-.013.038a.264.264 0 0 1-.5 0l-.013-.038a1.5 1.5 0 0 0-.949-.949l-.038-.013a.264.264 0 0 1 0-.5l.038-.013a1.5 1.5 0 0 0 .949-.949l.013-.038a.264.264 0 0 1 .5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nynl2ccxm {
  d: path("M7.375 3h9.25A4.375 4.375 0 0 1 21 7.375v9.25A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-9.25A4.375 4.375 0 0 1 7.375 3M12 3v18m-9-9h18");
}
</style><g class="hntgybcog"><path class="nynl2ccxm"/><path class="h1el86bfr"/></g>`,
		"fallback": "uix:sky-survey",
	});
}

export default Component;
