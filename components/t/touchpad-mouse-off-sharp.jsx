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
		"content": `<style>.org4hrs-y {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 16L2 16L2 2.4142M6.6569 2L20 2L20 7M15.2403 10.9356L16.1235 10.4666C16.6831 10.1688 17.3218 10 18 10C20.2091 10 22 11.7909 22 14L22 17.3431M20.8284 20.8284C20.1046 21.5523 19.1046 22 18 22C15.7909 22 14 20.2091 14 18L14 14M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="org4hrs-y"/>`,
		"fallback": "keyline-icons:touchpad-mouse-off-sharp",
	});
}

export default Component;
