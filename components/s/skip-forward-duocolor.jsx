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
		"content": `<style>.me840xbdo {
  d: path("m7.06 5.304l8 5a2 2 0 0 1 0 3.392l-8 5C5.728 19.529 4 18.571 4 17V7c0-1.57 1.728-2.529 3.06-1.696");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uax7j3gsp {
  stroke-opacity: 0.4;
  d: path("M20 5v14");
}
</style><g class="nrj6p8qat"><path class="uax7j3gsp"/><path class="me840xbdo"/></g>`,
		"fallback": "coolicons:skip-forward-duocolor",
	});
}

export default Component;
