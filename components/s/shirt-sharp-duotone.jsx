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
		"content": `<style>.tttpw3btv {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 2L20.5 4L22.0001 8.5L18.5 10.5L18 22L6 22L5.5 10.5L1.9999 8.5L3.5 4L9 2C9 3.6569 10.3431 5 12 5C13.6569 5 15 3.6569 15 2Z");
}
</style><path class="tttpw3btv"/>`,
		"fallback": "keyline-icons:shirt-sharp-duotone",
	});
}

export default Component;
