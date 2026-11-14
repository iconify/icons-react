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
		"content": `<style>.sjsadsjsl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.5 19h-19v-9h7a9 9 0 0 0 9 9M3 6.75l.75.75h4.5L9 6.75M4.75 9h.01m2.49 0h.01");
}
</style><path class="sjsadsjsl"/>`,
		"fallback": "uix-sharp:skate-park",
	});
}

export default Component;
