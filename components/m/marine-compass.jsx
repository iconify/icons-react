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
		"content": `<style>.bz6b69bwy {
  d: path("M6 13.25a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i6azqx33m {
  d: path("M11.25 6za.875.875 0 0 1 1.5 0a.825.825 0 0 1-.708 1.25h-.084A.825.825 0 0 1 11.25 6m3.29 5.366l-.759 2.552a1.5 1.5 0 0 1-.544.777l-2.139 1.586a1.054 1.054 0 0 1-1.638-1.147l.759-2.552a1.5 1.5 0 0 1 .544-.777l2.139-1.586a1.054 1.054 0 0 1 1.638 1.147");
}

.yv0r5iqto {
  d: path("M10.375 2.5h3.25a7.875 7.875 0 0 1 7.875 7.875v3.25a7.875 7.875 0 0 1-7.875 7.875h-3.25A7.875 7.875 0 0 1 2.5 13.625v-3.25A7.875 7.875 0 0 1 10.375 2.5");
}
</style><g class="hntgybcog"><path class="yv0r5iqto"/><path class="bz6b69bwy"/><path class="i6azqx33m"/></g>`,
		"fallback": "uix:marine-compass",
	});
}

export default Component;
