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
		"content": `<style>.gwwii1b6l {
  d: path("M5.5 8.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-3.5 4v3c0 4 5 2.5 5 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s_qz2wt_f {
  d: path("M6 4.5h12A3.5 3.5 0 0 1 21.5 8v1a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 9V8A3.5 3.5 0 0 1 6 4.5");
}
</style><g class="hntgybcog"><path class="s_qz2wt_f"/><path class="gwwii1b6l"/></g>`,
		"fallback": "uix:power-strip",
	});
}

export default Component;
