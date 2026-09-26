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
		"content": `<style>.bguki9bvt {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 2L22 12L2 22L3.8856 12L2 2ZM3.8856 12L22 12");
}
</style><path class="bguki9bvt"/>`,
		"fallback": "keyline-icons:send-horizontal-sharp",
	});
}

export default Component;
