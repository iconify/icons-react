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
		"content": `<style>.c6md9psky {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19.5h18M3 5h18M6.5 19.5V15m5.5 4.5v-7.25m5.5 7.25v-10");
}
</style><path class="c6md9psky"/>`,
		"fallback": "uix-sharp:margin-of-safety",
	});
}

export default Component;
