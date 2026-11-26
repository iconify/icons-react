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
		"content": `<style>.w5tf_cc9m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21V11C3 6.5817 6.5817 3 11 3H21M11 21V12C11 11.4477 11.4477 11 12 11H21");
}
</style><path class="w5tf_cc9m"/>`,
		"fallback": "keyline-icons:stroke-line-join-round-fill",
	});
}

export default Component;
