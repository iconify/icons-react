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
		"content": `<style>.m5elujb-l {
  fill: currentColor;
  d: path("M17 3L18 3C19.6569 3 21 4.3431 21 6L21 18C21 19.6569 19.6569 21 18 21L17 21L17 3Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wfvx-jtqi {
  d: path("M21 6L21 18C21 19.6569 19.6569 21 18 21L6 21C4.3431 21 3 19.6569 3 18L3 6C3 4.3431 4.3431 3 6 3L18 3C19.6569 3 21 4.3431 21 6ZM17 3L17 21M8 3L8 5M8 21L8 19M13 12L7 12M10 9L7 12L10 15");
}
</style><g class="nrj6p8qat"><path class="m5elujb-l"/><path class="wfvx-jtqi"/></g>`,
		"fallback": "keyline-icons:table-columns-merge-previous-fill",
	});
}

export default Component;
