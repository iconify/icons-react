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
		"content": `<style>.jrqwcb-bf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 13h-3a3 3 0 1 1 3-3za4 4 0 0 1-4 4");
}
</style><path class="jrqwcb-bf"/>`,
		"fallback": "coolicons:quote-single-right-duotone-round",
	});
}

export default Component;
