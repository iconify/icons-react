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
		"content": `<style>.ewjjxtbgh {
  d: path("M2.5 10a9.5 7.5 0 1 0 19 0a9.5 7.5 0 1 0-19 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n3zrl5mfv {
  d: path("M2.5 10v3.5a9.5 7.5 0 0 0 19 0V10");
}

.r-6mznbnk {
  d: path("M9 12.75a3 2.25 0 1 0 6 0a3 2.25 0 1 0-6 0m-1-4h.01m3.99-2h.01m3.99 2h.01");
}
</style><g class="hntgybcog"><path class="ewjjxtbgh"/><path class="n3zrl5mfv"/><path class="r-6mznbnk"/></g>`,
		"fallback": "uix:paw-balm",
	});
}

export default Component;
