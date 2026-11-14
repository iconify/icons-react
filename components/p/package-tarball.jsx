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
		"content": `<style>.bw0pajw5r {
  d: path("M4 8.5v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-10m-10.5 4h5");
}

.f-d71wb7g {
  fill: currentColor;
  d: path("M5 3.5h14A2.5 2.5 0 0 1 21.5 6A2.5 2.5 0 0 1 19 8.5H5A2.5 2.5 0 0 1 2.5 6A2.5 2.5 0 0 1 5 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="f-d71wb7g"/><path class="bw0pajw5r"/></g>`,
		"fallback": "uix:package-tarball",
	});
}

export default Component;
