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
		"content": `<style>.sae3x91sp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4a11 11 0 0 1 14 9A11 11 0 0 1 5 4ZM3 20.5h18M9.5 6.75l5 3.5");
}
</style><path class="sae3x91sp"/>`,
		"fallback": "uix-sharp:rugby-drop-goal",
	});
}

export default Component;
