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
		"content": `<style>.u1-uwksly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m6 9l-3 3l3 3m12 0l3-3l-3-3M3 12h18");
}
</style><path class="u1-uwksly"/>`,
		"fallback": "coolicons:move-horizontal-duotone-round",
	});
}

export default Component;
