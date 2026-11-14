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
		"content": `<style>.idwhmybcc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 5h6a7 7 0 0 1 0 14H6ZM2.5 9H6m-3.5 6H6m13-3h2.5");
}
</style><path class="idwhmybcc"/>`,
		"fallback": "uix-sharp:logic-gate-and",
	});
}

export default Component;
