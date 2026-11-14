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
		"content": `<style>.gf97r60jd {
  d: path("M7 2.5h10A4.5 4.5 0 0 1 21.5 7v5.5A4.5 4.5 0 0 1 17 17h-6.5l-5 4v-4.5a4.5 4.5 0 0 1-3-4V7A4.5 4.5 0 0 1 7 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j-ms01dkx {
  d: path("M10.5 13.5v-1c-1.25-.75-2-2-2-3.5a3.5 3.5 0 0 1 7 0c0 1.5-.75 2.75-2 3.5v1Z");
}
</style><g class="hntgybcog"><path class="gf97r60jd"/><path class="j-ms01dkx"/></g>`,
		"fallback": "uix:knowledge-sharing",
	});
}

export default Component;
