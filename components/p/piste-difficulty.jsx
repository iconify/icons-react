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
		"content": `<style>.cv78r1bid {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm11-4h7.5V11H14Zm-2 9l4.5 4.5l-4.5 4.5L7.5 17Z");
}
</style><path class="cv78r1bid"/>`,
		"fallback": "uix-sharp:piste-difficulty",
	});
}

export default Component;
