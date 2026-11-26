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
		"content": `<style>.klk7bac5k {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 3L9 3C6.2386 3 4 5.2386 4 8C4 10.7614 6.2386 13 9 13L14 13M14 3L14 22M19 3L19 22");
}
</style><path class="klk7bac5k"/>`,
		"fallback": "keyline-icons:pilcrow-sharp-fill",
	});
}

export default Component;
