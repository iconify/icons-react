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
		"content": `<style>.brg-wh8ae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18h18M4.5 18v3m15-3v3M6.25 3h3.5v10.25a1.75 1.75 0 0 1-3.5 0Zm8 0h3.5v10.25a1.75 1.75 0 0 1-3.5 0Zm-8 7.5h3.5m4.5-2h3.5");
}
</style><path class="brg-wh8ae"/>`,
		"fallback": "iconoven:test-tubes",
	});
}

export default Component;
