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
		"content": `<style>.k7r9h1f1n {
  d: path("M12 11.25c1.25 1.5 2.25 2.5 2.25 4c0 1.25-1 2.25-2.25 2.25s-2.25-1-2.25-2.25c0-1.5 1-2.5 2.25-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yu8pi5bvl {
  d: path("M6.5 8h11v13.5h-11Zm2-3h7v3h-7Zm2 0V2.75H13");
}
</style><g class="ulnmmdpxh"><path class="yu8pi5bvl"/><path class="k7r9h1f1n"/></g>`,
		"fallback": "uix-sharp:water-drop-hydration",
	});
}

export default Component;
