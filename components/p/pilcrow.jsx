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
		"content": `<style>.h5ruwobcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 3H9C6.2386 3 4 5.2386 4 8C4 10.7614 6.2386 13 9 13H14M14 3V21M19 3V21");
}
</style><path class="h5ruwobcz"/>`,
		"fallback": "keyline-icons:pilcrow",
	});
}

export default Component;
