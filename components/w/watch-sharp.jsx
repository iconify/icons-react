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
		"content": `<style>.uj2wvy54y {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6L18 6L18 18L6 18L6 6ZM8 6L8.5 2L15.5 2L16 6M8 18L8.5 22L15.5 22L16 18");
}
</style><path class="uj2wvy54y"/>`,
		"fallback": "keyline-icons:watch-sharp",
	});
}

export default Component;
