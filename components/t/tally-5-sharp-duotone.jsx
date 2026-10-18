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
		"content": `<style>.tbg_l-b7c {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 4L6 20M10 4L10 20M14 4L14 20M18 4L18 20M1.4472 17.2764L22.5528 6.7236");
}
</style><path class="tbg_l-b7c"/>`,
		"fallback": "keyline-icons:tally-5-sharp-duotone",
	});
}

export default Component;
