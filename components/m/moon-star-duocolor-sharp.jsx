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
		"content": `<style>.gf7bvie0m {
  stroke-opacity: 0.4;
  d: path("M17 4c0 1 2 3 3 3c-1 0-3 2-3 3c0-1-2-3-3-3c1 0 3-2 3-3");
}

.hyhsxxbud {
  d: path("M21 12a9 9 0 1 1-9-9a6.403 6.403 0 0 0 9 9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="gf7bvie0m"/><path class="hyhsxxbud"/></g>`,
		"fallback": "coolicons:moon-star-duocolor-sharp",
	});
}

export default Component;
