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
		"content": `<style>.ox39cnsxa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.7322 15.7322L15.4865 4.978C15.8158 4.6486 16.2173 4.4005 16.6591 4.2532L20.3419 3.0257C20.7328 2.8954 21.1046 3.2672 20.9743 3.6581L19.7468 7.3409C19.5995 7.7827 19.3514 8.1842 19.022 8.5135L8.2678 19.2678ZM3 14L10 21M6.5 17.5L3 21");
}
</style><path class="ox39cnsxa"/>`,
		"fallback": "keyline-icons:sword",
	});
}

export default Component;
