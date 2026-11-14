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
		"content": `<style>.zfehv4bqi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 19.5L12 12m4-9l1 2.5l2.5 1l-2.5 1l-1 2.5l-1-2.5l-2.5-1l2.5-1Zm4 10.5h.01M9 4.5h.01");
}
</style><path class="zfehv4bqi"/>`,
		"fallback": "uix-sharp:selection-magic-wand",
	});
}

export default Component;
