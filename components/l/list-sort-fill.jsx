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
		"content": `<style>.a22os6vlc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 10V3M3 6L6 3L9 6M6 14V21M3 18L6 21L9 18M13 6H21M13 12H21M13 18H21");
}
</style><path class="a22os6vlc"/>`,
		"fallback": "keyline-icons:list-sort-fill",
	});
}

export default Component;
