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
		"content": `<style>.iu648obmy {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 3H22M15 9H22M2 15H9M2 21H13M2 3H13M2 9H6M8 9H13M11 15H22");
}
</style><path class="iu648obmy"/>`,
		"fallback": "keyline-icons:text-word-spacing-sharp",
	});
}

export default Component;
