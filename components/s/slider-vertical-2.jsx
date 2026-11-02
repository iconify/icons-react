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
		"content": `<style>.zymrr9x_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m6 6a2 2 0 1 1 0 4a2 2 0 0 1 0-4m6-8a2 2 0 1 1 0 4a2 2 0 0 1 0-4M6 3v5m0 4v9m6-18v11m0 4v3m6-18v3m0 4v11");
}
</style><path class="zymrr9x_f"/>`,
		"fallback": "coolicons:slider-vertical-2",
	});
}

export default Component;
