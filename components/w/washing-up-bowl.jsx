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
		"content": `<style>.nw1waj4wo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18a9 9 0 0 1-18 0Zm4 0a2.5 2.5 0 0 1 3-3.5a3 3 0 0 1 5.5-.5a2.5 2.5 0 0 1 1.5 4");
}
</style><path class="nw1waj4wo"/>`,
		"fallback": "uix-sharp:washing-up-bowl",
	});
}

export default Component;
