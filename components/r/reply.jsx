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
		"content": `<style>.l4usy-bzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 5L3 9l4 4M3 9h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8");
}
</style><path class="l4usy-bzg"/>`,
		"fallback": "coolicons:reply",
	});
}

export default Component;
