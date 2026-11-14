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
		"content": `<style>.asr9z_b6r {
  d: path("m11.718 10.21l.868.473a1.5 1.5 0 0 1 0 2.634l-.868.473A1.5 1.5 0 0 1 9.5 12.473v-.946a1.5 1.5 0 0 1 2.218-1.317");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ze-zvr5fp {
  d: path("M7.375 3h9.25A4.375 4.375 0 0 1 21 7.375v9.25A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-9.25A4.375 4.375 0 0 1 7.375 3M3 6.75h18M3 17.25h18");
}
</style><g class="hntgybcog"><path class="ze-zvr5fp"/><path class="asr9z_b6r"/></g>`,
		"fallback": "uix:movie-trailer",
	});
}

export default Component;
