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
		"content": `<style>.ixcdw3xng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 13h-3a3 3 0 1 1 3-3za4 4 0 0 1-4 4m-6-4H7a3 3 0 1 1 3-3za4 4 0 0 1-4 4");
}
</style><path class="ixcdw3xng"/>`,
		"fallback": "coolicons:quote-right-duocolor-round",
	});
}

export default Component;
