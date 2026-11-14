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

.qpmpv7bvi {
  d: path("M7 2.5V5c0 2-1.25 3.25-2.5 3.75V20A1.5 1.5 0 0 0 6 21.5h12a1.5 1.5 0 0 0 1.5-1.5V8.75C18.25 8.25 17 7 17 5V2.5h-3c0 4.5-4 4.5-4 0Z");
}

.svt933t1q {
  d: path("M10.5 11.5h3a1.75 1.75 0 0 1 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75h-3a1.75 1.75 0 0 1-1.75-1.75v-2.5a1.75 1.75 0 0 1 1.75-1.75");
}
</style><g class="hntgybcog"><path class="qpmpv7bvi"/><path class="svt933t1q"/></g>`,
		"fallback": "uix:training-bib",
	});
}

export default Component;
