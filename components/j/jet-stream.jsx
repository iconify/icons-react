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
		"content": `<style>.gey0goydo {
  d: path("M2.5 18.5q7.5-6 15-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yt4ihub-r {
  d: path("M5.25 9.5q8.25-7 16.25-1");
}

.yyjzt3bvb {
  d: path("M2.5 14q8.5-7 17-1");
}
</style><g class="hntgybcog"><path class="yt4ihub-r"/><path class="yyjzt3bvb"/><path class="gey0goydo"/></g>`,
		"fallback": "uix:jet-stream",
	});
}

export default Component;
