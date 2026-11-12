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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tf-d008cp {
  d: path("M20.589 13.0532C20.589 17.9944 16.7436 22 12.0001 22C7.25653 22 3.41113 17.9944 3.41113 13.0532C3.41113 9.96156 6.77355 5.83518 9.29075 3.17923C10.7809 1.60692 13.2192 1.60692 14.7094 3.17923C17.2266 5.83518 20.589 9.96156 20.589 13.0532Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.w3ovu_rjp {
  d: path("M7.64355 10.7596C8.68575 9.27248 9.91823 7.84971 11.0098 6.68848");
}
</style><g class="ipq1z-bjh"><path class="tf-d008cp"/><path class="w3ovu_rjp"/></g>`,
		"fallback": "solar:waterdrop-line-duotone",
	});
}

export default Component;
