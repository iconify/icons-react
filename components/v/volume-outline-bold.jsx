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
		"content": `<style>.jmjqszbgk {
  d: path("M8 9H3v6h5l5 5V4Z");
}

.mhs8_k62s {
  d: path("M17 5.07a8 8 0 0 1 0 13.86");
}

.p3nkycb4i {
  d: path("M15.5 7.67a5 5 0 0 1 0 8.66");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="jmjqszbgk"/><path class="p3nkycb4i"/><path class="mhs8_k62s"/></g>`,
		"fallback": "iconmind:volume-outline-bold",
	});
}

export default Component;
