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
		"content": `<style>.w7adc9b1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 9V7a4 4 0 1 1 8 0v2m-8 6v2a4 4 0 1 0 8 0v-2m-4-7v8");
}
</style><path class="w7adc9b1x"/>`,
		"fallback": "coolicons:link-vertical-sharp",
	});
}

export default Component;
