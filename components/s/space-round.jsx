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
		"content": `<style>.w8wpf-q8i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 9v2a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V9");
}
</style><path class="w8wpf-q8i"/>`,
		"fallback": "coolicons:space-round",
	});
}

export default Component;
