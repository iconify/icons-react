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
		"content": `<style>.kt25ylb-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 12h5a8.97 8.97 0 0 0-5-8l-2 4a4.22 4.22 0 0 1 2 4m-6-4L8 4a8.97 8.97 0 0 0-5 8h5a4.22 4.22 0 0 1 2-4m0 8l-2 4a8.94 8.94 0 0 0 8 0l-2-4a4.47 4.47 0 0 1-4 0m2-4h.01");
}
</style><path class="kt25ylb-p"/>`,
		"fallback": "coolicons:radiation-round",
	});
}

export default Component;
