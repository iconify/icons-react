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
		"content": `<style>.ub_dixb-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 5L6 19M10 5L10 19M14 5L14 19M18 5L18 19M2 17L22 7");
}
</style><path class="ub_dixb-a"/>`,
		"fallback": "keyline-icons:tally-5-duotone",
	});
}

export default Component;
