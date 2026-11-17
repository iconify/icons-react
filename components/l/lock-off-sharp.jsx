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
		"content": `<style>.mhc0a-2pu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 21H4V10h3m6 0h7v7M9 6a3 3 0 0 1 6 0v4M2 5l17 17");
}
</style><path class="mhc0a-2pu"/>`,
		"fallback": "coolicons:lock-off-sharp",
	});
}

export default Component;
