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
		"content": `<style>.wjh9_9bqn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 9A7.616 7.616 0 0 0 5 9m6 0H5V3m0 12a7.616 7.616 0 0 0 14 0m-6 0h6v6");
}
</style><path class="wjh9_9bqn"/>`,
		"fallback": "coolicons:reload-duocolor",
	});
}

export default Component;
