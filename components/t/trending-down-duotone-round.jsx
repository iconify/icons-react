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
		"content": `<style>.s0g1dmd3m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 7l4 4a2.83 2.83 0 0 0 4 0a2.83 2.83 0 0 1 4 0l6 6m-6 0h6v-6");
}
</style><path class="s0g1dmd3m"/>`,
		"fallback": "coolicons:trending-down-duotone-round",
	});
}

export default Component;
