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
		"content": `<style>.hh0or6spb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 3a9 9 0 1 0 0 18 7 7 0 0 1 0 -18");
}
</style><path class="hh0or6spb"/>`,
		"fallback": "iconmind:moon-crescent-outline-regular",
	});
}

export default Component;
