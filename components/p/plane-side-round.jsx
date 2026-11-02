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
		"content": `<style>.mz60mobmh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 10h11a2 2 0 1 1 0 4h-4l-5 5H8l2-5H5L3 5h2z");
}
</style><path class="mz60mobmh"/>`,
		"fallback": "coolicons:plane-side-round",
	});
}

export default Component;
