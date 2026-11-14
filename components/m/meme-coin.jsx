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

.pjlk_61ty {
  d: path("M10.25 4.5H14a7.5 7.5 0 0 1 0 15h-3.75M8 9.5h.01m4.49 0h.01");
}

.r_q10qbtq {
  d: path("M2.75 12a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.ry8xnybkn {
  d: path("M6.5 13H14a3.75 3.75 0 0 1-7.5 0");
}
</style><g class="hntgybcog"><path class="r_q10qbtq"/><path class="pjlk_61ty"/><path class="ry8xnybkn"/></g>`,
		"fallback": "uix:meme-coin",
	});
}

export default Component;
