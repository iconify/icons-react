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
		"content": `<style>.zl5ttabds {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.146 8.26L8 4.5L10 2H14L16 4.5L13.854 8.26M12 22C8.134 22 5 18.87 5 15C5 11.13 8.134 8 12 8C15.866 8 19 11.13 19 15C19 18.87 15.866 22 12 22Z");
}
</style><path class="zl5ttabds"/>`,
		"fallback": "keyline-icons:ring-diamond-sharp",
	});
}

export default Component;
