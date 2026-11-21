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
		"content": `<style>.c6k6rgy9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 7V6C2 4.8954 2.8954 4 4 4H14C15.1046 4 16 4.8954 16 6V7M9 4V20M6 20H12M13 13V12C13 11.4477 13.4477 11 14 11H21C21.5523 11 22 11.4477 22 12V13M17.5 11V20M16 20H19");
}
</style><path class="c6k6rgy9s"/>`,
		"fallback": "keyline-icons:type-size",
	});
}

export default Component;
