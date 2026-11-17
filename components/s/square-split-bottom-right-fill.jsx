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
		"content": `<style>.lo4x8234r {
  fill: currentColor;
  d: path("M12 12H21V18C21 19.657 19.6569 21 18 21H12V12Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sbu14ob8r {
  d: path("M12 21V12H21M3 6C3 4.343 4.3431 3 6 3H18C19.6569 3 21 4.343 21 6V18C21 19.657 19.6569 21 18 21H6C4.3431 21 3 19.657 3 18V6Z");
}
</style><g class="nrj6p8qat"><path class="lo4x8234r"/><path class="sbu14ob8r"/></g>`,
		"fallback": "keyline-icons:square-split-bottom-right-fill",
	});
}

export default Component;
