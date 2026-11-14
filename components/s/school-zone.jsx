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

.iw3kdbbgj {
  d: path("M13.736 2.152a10 10 0 0 1 5.924 3.42m1.737 3.008a10 10 0 0 1 0 6.84m-1.737 3.008a10 10 0 0 1-5.924 3.42m-3.472 0a10 10 0 0 1-5.924-3.42M2.603 15.42a10 10 0 0 1 0-6.84M4.34 5.572a10 10 0 0 1 5.924-3.42M6.75 15.75v-2A1.25 1.25 0 0 1 8 12.5h.75a.5.5 0 0 0 .5-.5a.98.98 0 0 1 .404-.794l1.464-1.064a1.5 1.5 0 0 1 1.764 0l1.464 1.064a.98.98 0 0 1 .404.794a.5.5 0 0 0 .5.5H16a1.25 1.25 0 0 1 1.25 1.25v2a1.5 1.5 0 0 1-1.5 1.5h-7.5a1.5 1.5 0 0 1-1.5-1.5");
}

.z5asjccyc {
  d: path("M10.75 10.5V8h2.5v2.5m-3-2.5L12 6.75L13.75 8M11 17.25V15h2v2.25");
}
</style><g class="hntgybcog"><path class="iw3kdbbgj"/><path class="z5asjccyc"/></g>`,
		"fallback": "uix:school-zone",
	});
}

export default Component;
