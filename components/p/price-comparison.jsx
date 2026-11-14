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
		"content": `<style>.cc136rq3f {
  d: path("M5.5 10.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0m11-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uu-6nabys {
  d: path("m2.939 9.561l2.5-2.5a1.5 1.5 0 0 1 2.122 0l2.5 2.5a1.5 1.5 0 0 1 .439 1.06V19.5A1.5 1.5 0 0 1 9 21H4a1.5 1.5 0 0 1-1.5-1.5v-8.879a1.5 1.5 0 0 1 .439-1.06m11-4l2.5-2.5a1.5 1.5 0 0 1 2.122 0l2.5 2.5a1.5 1.5 0 0 1 .439 1.06V19.5A1.5 1.5 0 0 1 20 21h-5a1.5 1.5 0 0 1-1.5-1.5V6.621a1.5 1.5 0 0 1 .439-1.06");
}
</style><g class="hntgybcog"><path class="uu-6nabys"/><path class="cc136rq3f"/></g>`,
		"fallback": "uix:price-comparison",
	});
}

export default Component;
