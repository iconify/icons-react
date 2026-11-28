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
		"content": `<style>.v_8ur4b6e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 3H6C4.3431 3 3 4.3431 3 6C3 7.6569 4.3431 9 6 9H8M8 3V13M13 3V13M3 17H21M17 13L21 17L17 21");
}
</style><path class="v_8ur4b6e"/>`,
		"fallback": "keyline-icons:pilcrow-right-fill",
	});
}

export default Component;
