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
		"content": `<style>.houanob1y {
  d: path("M12 7L12 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.teyv8_8vu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 2C15.866 2 19 5.134 19 9L19 15C19 18.866 15.866 22 12 22C8.134 22 5 18.866 5 15L5 9C5 5.134 8.134 2 12 2Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="teyv8_8vu"/><path class="houanob1y"/></g>`,
		"fallback": "keyline-icons:mouse-duotone",
	});
}

export default Component;
