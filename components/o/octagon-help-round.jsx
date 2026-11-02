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
		"content": `<style>.z-3k8hbap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h2c1.28 0 2.36.36 3 1l3 3c.64.64 1 1.72 1 3v4c0 1.28-.36 2.36-1 3l-3 3c-.64.64-1.72 1-3 1h-4c-1.28 0-2.36-.36-3-1l-3-3c-.64-.64-1-1.72-1-3v-4c0-1.28.36-2.36 1-3l3-3c.64-.64 1.72-1 3-1zm-3 8a3 3 0 1 1 3 3m0 3h.01");
}
</style><path class="z-3k8hbap"/>`,
		"fallback": "coolicons:octagon-help-round",
	});
}

export default Component;
