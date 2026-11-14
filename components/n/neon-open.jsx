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
		"content": `<style>.clgzg98td {
  d: path("M6 9h12a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18v-5.5A3.5 3.5 0 0 1 6 9m1 0l5-3.75L17 9m-5-3.75h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n_vd-j_xf {
  d: path("M12 2v1M4 4.5l1.25 1.25M20 4.5l-1.25 1.25");
}

.tivyg7boa {
  fill: currentColor;
  d: path("M13 10.75L8.5 16h3l-1 4l5-5.75h-3Z");
}
</style><g class="hntgybcog"><path class="clgzg98td"/><path class="tivyg7boa"/><path class="n_vd-j_xf"/></g>`,
		"fallback": "uix:neon-open",
	});
}

export default Component;
