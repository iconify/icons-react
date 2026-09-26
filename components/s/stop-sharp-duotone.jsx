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
		"content": `<style>.cz0gkpb4y {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 5L19 5L19 19L5 19L5 5Z");
}
</style><path class="cz0gkpb4y"/>`,
		"fallback": "keyline-icons:stop-sharp-duotone",
	});
}

export default Component;
