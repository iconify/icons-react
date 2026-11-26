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
		"content": `<style>.ra1wdrbje {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 12L2 12M5.2929 8.7071L2 12L5.2929 15.2929M15 12L22 12M18.7071 8.7071L22 12L18.7071 15.2929M12 4L12 20");
}
</style><path class="ra1wdrbje"/>`,
		"fallback": "keyline-icons:unfold-horizontal-sharp",
	});
}

export default Component;
