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
		"content": `<style>.kmwe5yb_a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h16V7H4ZM3 12.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM2.5 21.5a2.5 3.25 0 0 1 5 0h2a2.5 3.25 0 0 1 5 0h2a2.5 3.25 0 0 1 5 0");
}
</style><path class="kmwe5yb_a"/>`,
		"fallback": "uix-sharp:media-audience",
	});
}

export default Component;
