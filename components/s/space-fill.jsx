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
		"content": `<style>.thjde-x0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 10L2 12C2 13.1046 2.8954 14 4 14L20 14C21.1046 14 22 13.1046 22 12L22 10");
}
</style><path class="thjde-x0f"/>`,
		"fallback": "keyline-icons:space-fill",
	});
}

export default Component;
