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
		"content": `<style>.ryt39u2qe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h8c1.28 0 2.36.36 3 1l2 2c.64.64 1 1.72 1 3v8a4 4 0 0 1-4 4zm-5 0v-3a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v3M9 7h6");
}
</style><path class="ryt39u2qe"/>`,
		"fallback": "coolicons:save-round",
	});
}

export default Component;
