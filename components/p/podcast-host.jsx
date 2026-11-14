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
		"content": `<style>.f7bkafbnj {
  d: path("M9 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s3r-_v2fe {
  d: path("M5.25 9.5a6.75 6.75 0 0 1 13.5 0m-13.5 0za1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5m13.5 0za1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5M4.5 21.5c0-2.25 3.25-3.5 7.5-3.5s7.5 1.25 7.5 3.5m-2.25-8Q16.5 15 14 15");
}
</style><g class="hntgybcog"><path class="f7bkafbnj"/><path class="s3r-_v2fe"/></g>`,
		"fallback": "uix:podcast-host",
	});
}

export default Component;
