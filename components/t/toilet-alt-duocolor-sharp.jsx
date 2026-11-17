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
		"content": `<style>.j8o50xb9e {
  stroke-opacity: 0.4;
  d: path("M6 11V3h12v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vej5mdbja {
  d: path("M4 11h16a5 5 0 0 1-5 5h-1l2 5H8l2-5H9a5 5 0 0 1-5-5");
}
</style><g class="nrj6p8qat"><path class="j8o50xb9e"/><path class="vej5mdbja"/></g>`,
		"fallback": "coolicons:toilet-alt-duocolor-sharp",
	});
}

export default Component;
