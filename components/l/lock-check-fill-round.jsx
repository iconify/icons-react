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
		"content": `<style>.y4xx70bfi {
  fill: currentColor;
  d: path("M16 9a5 5 0 0 1 5 5v3a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5v-3a5 5 0 0 1 5-5V6a4 4 0 0 1 8 0Zm-2 0V6a2 2 0 1 0-4 0v3Zm-5.293 5.293a.999.999 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l5-5a.999.999 0 1 0-1.414-1.414L11 16.586Z");
}
</style><path class="y4xx70bfi"/>`,
		"fallback": "coolicons:lock-check-fill-round",
	});
}

export default Component;
