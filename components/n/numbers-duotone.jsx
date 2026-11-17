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
		"content": `<style>.ks255tqzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 9l2-2v10M9 7h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3m4-10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2m0 0h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3");
}
</style><path class="ks255tqzz"/>`,
		"fallback": "coolicons:numbers-duotone",
	});
}

export default Component;
