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
		"content": `<style>.maxs-gm0m {
  d: path("M10.5 13q0-5.5 3-9");
}

.p82-2oo3g {
  d: path("M2.5 17a9.5 4 0 1 0 19 0a9.5 4 0 1 0-19 0Z");
}

.tae-3mqvk {
  fill: currentColor;
  d: path("M5.75 3h2.5v5.5h-2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zour_mppf {
  d: path("M8 17q2-1.25 4 0t4 0M7 8.5v5");
}
</style><g class="ulnmmdpxh"><path class="p82-2oo3g"/><path class="zour_mppf"/><path class="tae-3mqvk"/><path class="maxs-gm0m"/></g>`,
		"fallback": "uix-sharp:pond-scene",
	});
}

export default Component;
