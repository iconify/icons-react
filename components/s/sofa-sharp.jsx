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
		"content": `<style>.ecrhn3b6u {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 18L2 8L8 8L8 14L16 14L16 8L22 8L22 18L2 18ZM5 8L5 4L19 4L19 8M5 18L5 21M19 18L19 21");
}
</style><path class="ecrhn3b6u"/>`,
		"fallback": "keyline-icons:sofa-sharp",
	});
}

export default Component;
