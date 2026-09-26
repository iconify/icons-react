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
		"content": `<style>.thhqrkbic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 5L8.5571 10.6204C8.7899 10.8199 8.7899 11.1801 8.5571 11.3796L2 17M18 19H11M19 5L19 11M16 8L22 8");
}
</style><path class="thhqrkbic"/>`,
		"fallback": "keyline-icons:terminal-plus-fill",
	});
}

export default Component;
