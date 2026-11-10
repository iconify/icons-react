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
		"content": `<style>.kc9epm6ee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 10L6.0862 3.6C6.4381 2.8 7.5619 2.8 7.9138 3.6L9.554 7M9.554 7L11 10M9.554 7H4.446M15 3H21M15 9H21M3 15H21M3 21H21");
}
</style><path class="kc9epm6ee"/>`,
		"fallback": "keyline-icons:text-align-justify-character",
	});
}

export default Component;
