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
		"content": `<style>.j12aavbbl {
  d: path("M12.6 16.5H2.5v-13h19v13h-1.1m-8.4 0v4m-4 0h8");
}

.n535y5vax {
  d: path("M8.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3.5 0V6.5l2.75 1m1 8l6 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j12aavbbl"/><path class="n535y5vax"/></g>`,
		"fallback": "uix-sharp:music-cast-off",
	});
}

export default Component;
