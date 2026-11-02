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
		"content": `<style>.lf6m0mjdi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 12v1a2 2 0 1 0 4 0a7.071 7.071 0 1 0-6 6m-4-7a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><path class="lf6m0mjdi"/>`,
		"fallback": "coolicons:mention-round",
	});
}

export default Component;
