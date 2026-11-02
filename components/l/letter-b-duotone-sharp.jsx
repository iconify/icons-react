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
		"content": `<style>.tr17lu3bn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 12h6a4 4 0 1 1 0 8H7V4h5a4 4 0 1 1 0 8");
}
</style><path class="tr17lu3bn"/>`,
		"fallback": "coolicons:letter-b-duotone-sharp",
	});
}

export default Component;
