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
		"content": `<style>.sqk3sjdoz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 16H17M12 11V7M6.707 11.71L4.707 9.71M17.364 11.71L19.364 9.71M19 16H23M1 16H5");
}
</style><path class="sqk3sjdoz"/>`,
		"fallback": "keyline-icons:light-max-sharp",
	});
}

export default Component;
