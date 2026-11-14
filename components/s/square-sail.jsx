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
		"content": `<style>.z7bh8rfjs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5V18M5 4h14M5.5 4q-1 6 0 10.5h13q1-4.5 0-10.5M4 18h16l-2 3.5H6Z");
}
</style><path class="z7bh8rfjs"/>`,
		"fallback": "uix-sharp:square-sail",
	});
}

export default Component;
