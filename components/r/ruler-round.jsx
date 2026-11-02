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
		"content": `<style>.iywt5db8w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9 9l4-4a2.83 2.83 0 0 1 4 0l2 2a2.83 2.83 0 0 1 0 4l-8 8a2.83 2.83 0 0 1-4 0l-2-2a2.83 2.83 0 0 1 0-4zm-4 4l2 2m2-6l2 2m2-6l2 2");
}
</style><path class="iywt5db8w"/>`,
		"fallback": "coolicons:ruler-round",
	});
}

export default Component;
