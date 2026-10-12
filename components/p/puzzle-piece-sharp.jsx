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
		"content": `<style>.iza8vibey {
  d: path("M12.5 5H21v14h-8.5v-4.75a2.25 2.25 0 0 0 0-4.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yx-kgjwbn {
  d: path("M5 5h7.5v4.75a2.25 2.25 0 0 1 0 4.5V19H3V5z");
}
</style><g class="x2cwu0gfd"><path class="yx-kgjwbn"/><path class="iza8vibey"/></g>`,
		"fallback": "iconoven:puzzle-piece-sharp",
	});
}

export default Component;
