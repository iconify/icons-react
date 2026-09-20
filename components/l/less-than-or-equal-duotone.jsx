import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c7it4q6rl {
  d: path("M200 48v112L48 104Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.pwl96hbem {
  d: path("M40 104a8 8 0 0 1 5.23-7.5l152-56a8 8 0 0 1 5.53 15L71.14 104l131.62 48.49A8 8 0 0 1 200 168a8.1 8.1 0 0 1-2.77-.49l-152-56A8 8 0 0 1 40 104m160 88H48a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16");
}
</style><g class="cuyn6tgcc"><path class="c7it4q6rl"/><path class="pwl96hbem"/></g>`,
		"fallback": "ph:less-than-or-equal-duotone",
	});
}

export default Component;
