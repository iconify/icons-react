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
		"content": `<style>.ddgz2b25r {
  d: path("M6.5 20.5V4l11 11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zptogsb5s {
  d: path("M17.5 9.5V15H12");
}
</style><g class="hntgybcog"><path class="ddgz2b25r"/><path class="zptogsb5s"/></g>`,
		"fallback": "uix:turn-sharp-right",
	});
}

export default Component;
