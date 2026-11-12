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
		"content": `<style>.fms4zcbzr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h18M3 7h10M3 15l2-2v8m4-6a2 2 0 1 1 4 0l-4 6h4m4-8h4l-3 4h1a2 2 0 1 1 0 4h-2");
}
</style><path class="fms4zcbzr"/>`,
		"fallback": "coolicons:text-numbers-duotone",
	});
}

export default Component;
