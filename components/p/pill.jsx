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

.iz8sjwb3r {
  d: path("m9.53 9.53l4.24-4.25a3.5 3.5 0 0 1 4.95 4.95l-4.25 4.24Z");
}

.we246k-fy {
  d: path("m9.53 9.53l-4.25 4.24a3.5 3.5 0 0 0 4.95 4.95l4.24-4.25Z");
}
</style><g class="hntgybcog"><path class="we246k-fy"/><path class="iz8sjwb3r"/></g>`,
		"fallback": "iconoven:pill",
	});
}

export default Component;
