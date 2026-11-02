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
		"content": `<style>.fwhof2_ay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 6v5a3 3 0 0 0 6 0V6a3 3 0 0 0-6 0m3 12v3M5 10v1a7 7 0 0 0 14 0v-1");
}
</style><path class="fwhof2_ay"/>`,
		"fallback": "coolicons:microphone",
	});
}

export default Component;
