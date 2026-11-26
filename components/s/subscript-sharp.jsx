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
		"content": `<style>.w4p8wo2tm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1.7704 3.6375L12 16L12.2999 16.3625M12.2998 3.6402L12 4L2 16L1.7681 16.2783M16.4323 15.3965L16.75 15.1L19 13L19 20M15 20L23 20");
}
</style><path class="w4p8wo2tm"/>`,
		"fallback": "keyline-icons:subscript-sharp",
	});
}

export default Component;
