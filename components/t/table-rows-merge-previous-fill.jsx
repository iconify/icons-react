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
		"content": `<style>.e6f20c6qj {
  d: path("M6 21L18 21C19.6569 21 21 19.6569 21 18L21 6C21 4.3431 19.6569 3 18 3L6 3C4.3431 3 3 4.3431 3 6L3 18C3 19.6569 4.3431 21 6 21ZM3 17L21 17M3 8L5 8M21 8L19 8M12 13L12 7M9 10L12 7L15 10");
}

.e7nju_bdz {
  fill: currentColor;
  d: path("M3 17L3 18C3 19.6569 4.3431 21 6 21L18 21C19.6569 21 21 19.6569 21 18L21 17L3 17Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="e7nju_bdz"/><path class="e6f20c6qj"/></g>`,
		"fallback": "keyline-icons:table-rows-merge-previous-fill",
	});
}

export default Component;
