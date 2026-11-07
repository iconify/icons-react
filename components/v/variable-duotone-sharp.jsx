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
		"content": `<style>.n4rrz9b1z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 5C3 9 3 15 7 19M17 5c4 4 4 10 0 14M9 9l6 6m0-6l-6 6");
}
</style><path class="n4rrz9b1z"/>`,
		"fallback": "coolicons:variable-duotone-sharp",
	});
}

export default Component;
