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
		"content": `<style>.an7o96bab {
  d: path("M3 6L3 18C3 19.6569 4.3431 21 6 21L18 21C19.6569 21 21 19.6569 21 18L21 6C21 4.3431 19.6569 3 18 3L6 3C4.3431 3 3 4.3431 3 6ZM7 3L7 21M16 3L16 5M16 21L16 19M11 12L17 12M14 9L17 12L14 15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zlfsbc_iv {
  fill: currentColor;
  d: path("M7 3L6 3C4.3431 3 3 4.3431 3 6L3 18C3 19.6569 4.3431 21 6 21L7 21L7 3Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="zlfsbc_iv"/><path class="an7o96bab"/></g>`,
		"fallback": "keyline-icons:table-columns-merge-next-fill",
	});
}

export default Component;
