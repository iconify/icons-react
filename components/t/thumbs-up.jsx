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
		"content": `<style>.dx4gzbbum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 11l3.5-6.5c1-1.5 3.5-1 3.25 1.25l-.5 3.75h5.25a2 2 0 0 1 2 2.25l-1.25 6.5a2 2 0 0 1-2 1.75H7Zm-3-.5zA1.5 1.5 0 0 1 5.5 12v6.5A1.5 1.5 0 0 1 4 20a1.5 1.5 0 0 1-1.5-1.5V12A1.5 1.5 0 0 1 4 10.5");
}
</style><path class="dx4gzbbum"/>`,
		"fallback": "uix:thumbs-up",
	});
}

export default Component;
