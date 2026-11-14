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
		"content": `<style>.dd-rwwsxj {
  d: path("M7.348 15.652a3.75 3.75 0 1 1 5.304 0M10 14v4.75m8-4.25v7m-3-3l3 3l3-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kojnx9y2b {
  d: path("M13.5 2.5v3h3M9 13a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}

.yknm4qojf {
  d: path("M14.043 21.5H3.5v-19h10l3 3v6.657");
}
</style><g class="hntgybcog"><path class="yknm4qojf"/><path class="kojnx9y2b"/><path class="dd-rwwsxj"/></g>`,
		"fallback": "uix:podcast-episode-download",
	});
}

export default Component;
