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
		"content": `<style>.rgpg_wbqj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 9A6 6 0 1 0 6 9v6a6 6 0 1 0 12 0v-2h-4");
}
</style><path class="rgpg_wbqj"/>`,
		"fallback": "coolicons:letter-g-duotone-round",
	});
}

export default Component;
