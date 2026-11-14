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
		"content": `<style>.e1d_314nu {
  d: path("M10 10h4v4a2 2 0 0 1-4 0Zm2 0V4.5m-2.25 0h4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z1pvq-bfb {
  d: path("M2.5 14h4q5.5 10 11 0h4");
}
</style><g class="hntgybcog"><path class="z1pvq-bfb"/><path class="e1d_314nu"/></g>`,
		"fallback": "uix:pothole-repair",
	});
}

export default Component;
