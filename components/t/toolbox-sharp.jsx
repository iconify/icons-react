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
		"content": `<style>.tc7bo-bol {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 8L19 8L22 11L22 21L2 21L2 11L5 8ZM2 14L22 14M8 11L8 17M16 11L16 17M8 8L8 3L16 3L16 8");
}
</style><path class="tc7bo-bol"/>`,
		"fallback": "keyline-icons:toolbox-sharp",
	});
}

export default Component;
