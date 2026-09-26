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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.or1qkrllr {
  d: path("M12 6L12 9");
}

.teyv8_8vu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 2C15.866 2 19 5.134 19 9L19 15C19 18.866 15.866 22 12 22C8.134 22 5 18.866 5 15L5 9C5 5.134 8.134 2 12 2Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="teyv8_8vu"/><path class="or1qkrllr"/></g>`,
		"fallback": "keyline-icons:mouse-sharp-duotone",
	});
}

export default Component;
