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
		"content": `<style>.qqekb_bpo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 18v-3a9 9 0 0 1 18 0v3M9 18v-3a3 3 0 0 1 6 0v3m-9 0v-3a6 6 0 1 1 12 0v3");
}
</style><path class="qqekb_bpo"/>`,
		"fallback": "coolicons:rainbow-duotone",
	});
}

export default Component;
