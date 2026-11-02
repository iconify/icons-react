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
		"content": `<style>.ngxjcr4ra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21a9 9 0 1 1 9-9a4 4 0 0 1-4 4h-2a2 2 0 0 0-2 2v2a1 1 0 0 1-1 1m-5-9h.01M9 8h.01M14 7h.01M17 11h.01");
}
</style><path class="ngxjcr4ra"/>`,
		"fallback": "coolicons:palette",
	});
}

export default Component;
