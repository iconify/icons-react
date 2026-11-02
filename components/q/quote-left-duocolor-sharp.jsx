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
		"content": `<style>.rvo27vwut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11h6v6H4za4 4 0 0 1 4-4m6 4h6v6h-6za4 4 0 0 1 4-4");
}
</style><path class="rvo27vwut"/>`,
		"fallback": "coolicons:quote-left-duocolor-sharp",
	});
}

export default Component;
