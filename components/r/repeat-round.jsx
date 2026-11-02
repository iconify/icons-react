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
		"content": `<style>.obdtc0bpo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 11v-1a4 4 0 0 1 4-4h14m-3 3l3-3l-3-3m3 10v1a4 4 0 0 1-4 4H3m3-3l-3 3l3 3");
}
</style><path class="obdtc0bpo"/>`,
		"fallback": "coolicons:repeat-round",
	});
}

export default Component;
