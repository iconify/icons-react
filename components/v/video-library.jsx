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
		"content": `<style>.h93ukxbmk {
  d: path("M6.75 3.75h11.5a3 3 0 0 1 3 3v10M9.43 12.42l2.64 1.66q.68.42 0 .84l-2.64 1.66q-.68.42-.68-.38v-3.4q0-.8.68-.38");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v7avk1-hg {
  width: 15.5px;
  height: 13.5px;
  x: 2.75px;
  y: 7.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="v7avk1-hg"/><path class="h93ukxbmk"/></g>`,
		"fallback": "iconoven:video-library",
	});
}

export default Component;
