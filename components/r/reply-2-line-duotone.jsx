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
		"content": `<style>.h5-d5-vzc {
  d: path("M4.5 12L14.5 12C16.1667 12 19.5 11 19.5 7");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ugiwgbc1m {
  stroke-linejoin: round;
  d: path("M9.5 17L4.5 12L9.5 7");
}
</style><g class="ipq1z-bjh"><path class="ugiwgbc1m"/><path class="h5-d5-vzc"/></g>`,
		"fallback": "solar:reply-2-line-duotone",
	});
}

export default Component;
