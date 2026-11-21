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
		"content": `<style>.fdq7ykhny {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 1L20 2L20 10C20 15.5228 15.5228 20 10 20L2 20L1 20M13 1L13 2L13 10C13 11.6569 11.6569 13 10 13L2 13L1 13M6 23L6 22L6 11L6 10M23 6L22 6L11 6L10 6");
}
</style><path class="fdq7ykhny"/>`,
		"fallback": "keyline-icons:pipe-section-sharp",
	});
}

export default Component;
