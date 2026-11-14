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
		"content": `<style>.ocyf5ip6z {
  d: path("M8 21.5v-4c-2.5-1.75-3.5-4.25-3.5-7C4.5 6.25 7.75 3 12 3c4 0 7 2.75 7 6.75l1.5 3.5c.25.5-.1 1-.75 1H19v2.25c0 1.1-.9 2-2 2h-2v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vy7-pirjl {
  d: path("m7.434 11.591l5.657-5.657l2.475 2.475l-5.657 5.657Zm2.829-2.828l2.474 2.474");
}
</style><g class="ulnmmdpxh"><path class="ocyf5ip6z"/><path class="vy7-pirjl"/></g>`,
		"fallback": "uix-sharp:prescription-mental",
	});
}

export default Component;
