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

.mr48r514n {
  d: path("M10.5 3.5v1l.75.5");
}

.mwq8m2bvc {
  d: path("m14.125 8l.038-.042a1.027 1.027 0 0 1 1.712.292a.924.924 0 0 1-.984 1.27l-.226-.032A.897.897 0 0 1 14.125 8M7 19.5v2m8.5-2v2m.75-8.75h.01m-7.51-1h3.5M8 4.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.u05rlfbms {
  d: path("M3.5 14.5a8 5.5 0 1 0 16 0a8 5.5 0 1 0-16 0m17-1.75za1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1");
}
</style><g class="hntgybcog"><path class="u05rlfbms"/><path class="mwq8m2bvc"/><path class="mr48r514n"/></g>`,
		"fallback": "uix:time-off-bank",
	});
}

export default Component;
