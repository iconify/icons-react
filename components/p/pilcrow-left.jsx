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
		"content": `<style>.h_9fw8bbn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 3H13C11.3431 3 10 4.3431 10 6C10 7.6569 11.3431 9 13 9H15M15 3V13M20 3V13M21 17H3M7 13L3 17L7 21");
}
</style><path class="h_9fw8bbn"/>`,
		"fallback": "keyline-icons:pilcrow-left",
	});
}

export default Component;
