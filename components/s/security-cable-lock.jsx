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
		"content": `<style>.ocqdafbtl {
  d: path("M5.5 8.5a3 2.5 0 1 0 6 0a3 2.5 0 1 0-6 0ZM13 15h8.5v6.5H13Zm2 0v-1.5a2.25 2.25 0 0 1 4.5 0V15M6 13.5c0 3.5 2.5 4.75 7 4.75m4.25 0h.01");
}

.r06c44d6o {
  d: path("M2.5 8.5a6 5.5 0 1 0 12 0a6 5.5 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r06c44d6o"/><path class="ocqdafbtl"/></g>`,
		"fallback": "uix-sharp:security-cable-lock",
	});
}

export default Component;
