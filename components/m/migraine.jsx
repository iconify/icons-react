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
		"content": `<style>.lon5l31fz {
  fill: currentColor;
  d: path("M14.25 5.25L11.5 10.5h2L12.25 15l4.25-6h-2.25l1.5-3.75Z");
}

.ocyf5ip6z {
  d: path("M8 21.5v-4c-2.5-1.75-3.5-4.25-3.5-7C4.5 6.25 7.75 3 12 3c4 0 7 2.75 7 6.75l1.5 3.5c.25.5-.1 1-.75 1H19v2.25c0 1.1-.9 2-2 2h-2v3");
}

.txlyv1b_n {
  d: path("M7.75 10C9 9.75 9.5 11.75 8 12.25m9.25-2.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ocyf5ip6z"/><path class="lon5l31fz"/><path class="txlyv1b_n"/></g>`,
		"fallback": "uix-sharp:migraine",
	});
}

export default Component;
